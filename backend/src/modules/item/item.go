package item

import (
	"time"
)

type Item struct {
	OwnerHash    string // Owners UserID hashed
	ID           uint64 // 18,446,744,073,709,551,615 if you need more then this then i dont know
	Name         string
	Description  string
	CreationDate time.Time
	Price        int
}
