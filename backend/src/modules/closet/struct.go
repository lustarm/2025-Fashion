package closet

import "backend/src/modules/item"

type UserCloset struct {
	// List of items
	Items []item.Item
}
