# Change Log
**>I will try and update this as much as possible**

### 12/21/24
- Grab source from https://github.com/lustarm/ai-personal-coach/tree/main/backend
- Old project I worked on and had a template for JWT and golang backend
- Added item shop and closet structs for now
- Move API Response struct to util
    > Will probably move this to src/api/
- Make the API documentation better

### 12/22/23
- Move around some markdown files
- In backend modulated the files from just users.go to check.go verify.go etc
- Move auth to jwt
- Modulate jwt into verify create etc
- Jsonize items

### 12/23/24
- Added get user closet kinda as of 12:06 AM
- Added mock for closet working correctly. **Reponse below**
```
{
    "error": false,
    "message": "Success",
    "data": {
        "userItems": [
            {
                "ownerID": 1,
                "itemID": 1,
                "itemName": "Fancy Hat",
                "itemDescription": "A fancy hat with feathers",
                "creationDate": "2024-12-23T00:17:27.4536334-05:00",
                "price": 100
            },
            {
                "ownerID": 2,
                "itemID": 2,
                "itemName": "Elegant Coat",
                "itemDescription": "A stylish coat for winter",
                "creationDate": "2024-12-23T00:17:27.4536334-05:00",
                "price": 250
            }
        ]
    }
}
```
- Just updated api docs
- Change colors of home screen to more a gray background using tailwind zinc
- Added login and register files, have to do UX and implament (5:21 PM)
