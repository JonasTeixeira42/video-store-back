# Upload de arquivo

Cadastra um filme na plataforma

- **PATH** <br />
  /movies

- **Method** <br />
  `POST`

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
