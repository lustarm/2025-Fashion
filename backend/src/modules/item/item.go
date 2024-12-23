package item

import (
	"backend/src/users"
	"time"
)

type Item struct {
	Owner        users.User
	Name         string
	Description  string
	CreationDate time.Time
}
