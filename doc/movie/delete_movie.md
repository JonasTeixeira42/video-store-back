# Exclui um filme

Exclui um filme cadastrado na plataforma.

- **PATH** <br />
  /movies/{id}

- **Method** <br />
  `DELETE`

- **Path Params** <br />
  &emsp;**Required** <br />
  &emsp;&ndash; id

  &emsp;**Properties**

  ```json
  {
    "id": {
      "type": integer
    }
  }
  ```

- **Success Response**

  - **Code**: 200 <br />
    **Description**:
    ```json
    {
      "message": "Movie has been destroyed"
    }
    ```

- **Error Response:**

  - **Code:** 400 <br />
    **Description:** `"Movie does not exist"`
