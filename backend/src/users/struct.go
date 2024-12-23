package users

import "backend/src/modules/item"

// get from DB
// Obv were not going to grab all of them just grab them as we go
var users []User

// Will use this in DB later
var idCounter int

type User struct {
	ID       string `json:"id"`
	Email    string `json:"email"`
	Username string `json:"username"`
	Password string `json:"password"`
	Closet   UserCloset
}

// check.go
type CheckUserRequest struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

// closet.go
type UserCloset struct {
	Items []item.Item `json:"userItems"`
}

type GetUserClosetRequest struct {
	Username string `json:"username"`
}
