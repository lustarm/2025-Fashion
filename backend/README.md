# Golang Backend API Documentation

---

## Users API

### 1. Token Verification
- **Endpoint:** `POST /v1/verify`
- **Description:** Validates the provided JWT token.
- **Headers:**  
  - `Authorization: Bearer <JWT>`  
- **Response:**
  - **200 OK:** Token is valid.
    ```json
    {
      "error": false,
      "message": "Token is valid"
    }
    ```
  - **401 Unauthorized:** Token is invalid or expired.
    ```json
    {
      "error": true,
      "message": "Invalid or expired token"
    }
    ```

---

### 2. User Registration
- **Endpoint:** `POST /v1/register`
- **Description:** Registers a new user and issues a JWT token.
- **Headers:**  
  - `Content-Type: application/json`  
- **Request Body:**
  ```json
  {
    "email": "test@gmail.com",
    "username": "imatest",
    "password": "this will be hashed later"
  }

### 3. User Login (Continued)
- **Response:**
  - **200 OK:** User successfully logged in. The JWT token is returned in the `Authorization` header.
    - **Headers:**
      ```
      Authorization: Bearer <JWT>
      ```
    - **Body:**
      ```json
      {
        "error": false,
        "message": "User logged in successfully",
        "token": "<JWT>"
      }
      ```
  - **401 Unauthorized:** Invalid username or password.
    ```json
    {
      "error": true,
      "message": "Invalid username or password"
    }
    ```
  - **400 Bad Request:** Missing or invalid input fields.
    ```json
    {
      "error": true,
      "message": "Invalid input data"
    }
    ```
