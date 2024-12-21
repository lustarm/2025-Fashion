### GOLANG BACKEND

# API DOCS RIGHT HERE LATER
- Users
    > /v1/verify
        - This uses an authorization header to verify if a JWT token is valid
    > /v1/register
        - Registers a user
        - Returns a JWT Token and puts it into Authorization header
        - Auth header ex.
            > Authorization : Bearer JWT
        - Request ex. 
        ```
            {
                "email" : "test@gmail.com",
                "username" : "imatest",
                "password" : "this will be hashed later"
            }
        ```
    > /v1/login
        - Logs a user in

# IMPORTANT JWT TOKEN KEY
> in src/auth/secret.go please please change this to something secure and stored properly!