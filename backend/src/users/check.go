package users

import (
	"backend/src/jwt"
	"backend/src/util"
	"encoding/json"
	"fmt"
	"net/http"
)

// Updated CheckUser function with detailed error response
func CheckUser(w http.ResponseWriter, r *http.Request) {
	var credentials CheckUserRequest

	// Decode the incoming request body into credentials
	err := json.NewDecoder(r.Body).Decode(&credentials)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(util.APIResponse{Error: true, Message: "Invalid request payload"})
		return
	}

	// Iterate over the list of users to find a match
	for _, user := range users {
		if user.Username == credentials.Username && user.Password == credentials.Password {

			// Generate auth token
			token, err := jwt.CreateToken(user.Username, user.ID)
			if err != nil {
				w.WriteHeader(http.StatusUnauthorized)
				json.NewEncoder(w).Encode(util.APIResponse{Error: true, Message: "Failed to create authorization token"})
				return
			}

			// Set auth token header
			w.Header().Set("Authorization", fmt.Sprintf("Bearer %v", token))

			// Return success response
			json.NewEncoder(w).Encode(util.APIResponse{Error: false, Message: token})
			return
		}
	}

	// No match found, return invalid response
	w.WriteHeader(http.StatusUnauthorized)
	json.NewEncoder(w).Encode(util.APIResponse{Error: true, Message: "Invalid username or password"})
}
