package users

// get from DB
var users []User
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
