package users

import (
	"backend/src/jwt"
	"backend/src/util"
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"
)

// Updated CreateUser function with detailed error response
func CreateUser(w http.ResponseWriter, r *http.Request) {
	var newUser User
	err := json.NewDecoder(r.Body).Decode(&newUser)

	if err != nil {
		w.WriteHeader(http.StatusBadRequest)

		// Will usually return EOF
		json.NewEncoder(w).Encode(util.APIResponse{Error: true, Message: "Invalid request"})
		return
	}

	if newUser.Username == "" || newUser.Password == "" || newUser.Email == "" {
		w.WriteHeader(http.StatusUnauthorized)
		json.NewEncoder(w).Encode(util.APIResponse{Error: true, Message: "Invalid request"})
		return
	}

	// Check if user is already in DB
	for _, user := range users {
		if user.Username == newUser.Username {
			w.WriteHeader(http.StatusUnauthorized)
			json.NewEncoder(w).Encode(util.APIResponse{Error: true, Message: "User already registered"})
			return
		}
	}

	idCounter++
	newUser.ID = strconv.Itoa(idCounter)
	users = append(users, newUser)

	// Generate auth token
	token, err := jwt.CreateToken(newUser.ID, newUser.Username)
	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		json.NewEncoder(w).Encode(util.APIResponse{Error: true, Message: "Failed to create authorization token"})
		return
	}

	// Set auth token header
	w.Header().Set("Authorization", fmt.Sprintf("Bearer %v", token))

	// Return success response
	json.NewEncoder(w).Encode(util.APIResponse{Error: false, Message: token})
}