# Cadastra um novo Diretor

Cadastra um novo diretor na plataforma.

- **PATH** <br />
  /directors

- **Method** <br />
  `POST`

- **Body Params** <br />
  &emsp;**Required** <br />
  &emsp;&ndash; name <br />

  &emsp;**Properties**

  ```json
  {
    "name": {
      "type": string
    }
  }
  ```

- **Success Response**

  - **Code**: 200 <br />
    **Description**:
    ```json
    {
      "name": "xxxx"
    }
    ```

- **Error Response:**

  - **Code:** 400 <br />
    **Description:** `"Name is required"`

  - **Code:** 400 <br />
    **Description:** `"Minimum value 3"`
