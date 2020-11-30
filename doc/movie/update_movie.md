# Atualiza um filme

Atualiza o cadastro de um filme.

- **PATH** <br />
  /movies/{id}

- **Method** <br />
  `PUT`

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

- **Parameters** <br />

  &emsp;**Consumes** <br />
  &emsp;&ndash; multipart/form-data

  &emsp;**Properties**

  ```json
  {
    "file": {
      "type": file
    },
    "name": {
      "type": text
    },
    "director_id": {
      "type": text
    }
  }
  ```

- **Success Response**

  - **Code**: 200 <br />
    **Description**:
    ```json
    {
      "image": "xxxxx.jpg",
      "name": "xxxx",
      "director_id": "x"
    }
    ```

- **Error Response:**

  - **Code:** 400 <br />
    **Description:** `"Image is required"`

  - **Code:** 400 <br />
    **Description:** `"Name is required"`

  - **Code:** 400 <br />
    **Description:** `"Director ID is required"`

  - **Code:** 400 <br />
    **Description:** `"Director ID must be positive"`

  - **Code:** 400 <br />
    **Description:** `"Director ID must be an integer"`
