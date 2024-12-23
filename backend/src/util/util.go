package util

// util.APIResponse struct to represent the response format
type APIResponse struct {
	Error   bool   `json:"error"`
	Message string `json:"message"`
}
