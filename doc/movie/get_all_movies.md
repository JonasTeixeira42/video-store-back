# Consulta de todos os Diretores

Retorna todos os filmes cadastrados na paltaforma.

- **PATH** <br />
  /directors

- **Method** <br />
  `GET`

- **Success Response**

  - **Code**: 200 <br />
    **Description**:
    ```json
    [
      {
        "url": "http://localhost:8080/files/xxx.jpg",
        "id": 0,
        "name": "xxxxx",
        "image": "xxxx.jpg",
        "director": {
          "id": 0,
          "name": "xxxx"
        }
      },
      {
        "url": "http://localhost:8080/files/xxx.jpg",
        "id": 0,
        "name": "xxxxx",
        "image": "xxxx.jpg",
        "director": {
          "id": 0,
          "name": "xxxx"
        }
      }
    ]
    ```
