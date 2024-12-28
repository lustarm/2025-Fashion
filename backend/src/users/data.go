package users

import (
    "net/http"
    "encoding/json"
    "backend/src/util"
    "backend/src/jwt"
)

func GetUserData(w http.ResponseWriter, r *http.Request) {
    var request GetUserDataRequest
	err := json.NewDecoder(r.Body).Decode(&request)

	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)

		// Will usually return EOF
		json.NewEncoder(w).Encode(util.APIResponse{Error: true, Message: "Invalid request"})
		return
	}

	if request.SessionID == "" {
		w.WriteHeader(http.StatusUnauthorized)
		json.NewEncoder(w).Encode(util.APIResponse{Error: true, Message: "Invalid request"})
		return
	}

	// Check if user is already in DB
    err = jwt.VerifyToken(request.SessionID)

    if err != nil {
        w.WriteHeader(http.StatusUnauthorized)
        json.NewEncoder(w).Encode(util.APIResponse{Error: true, Message: "Failed to verify JWT token"})
        return
    }

	for _, user := range users {
		for _, userSessionID := range user.SessionIDs {
			if request.SessionID == userSessionID {

				w.WriteHeader(http.StatusOK)
				json.NewEncoder(w).Encode(
                    util.APIResponse{
                        Error: false,
                        Message: "Verified token",
                        Data: user,
                    })

				return
			}
		}
	}

	json.NewEncoder(w).Encode(util.APIResponse{Error: true, Message: "Failed to verify token"})
}
