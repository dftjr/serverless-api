# Documentation

## [Production Link](https://yyk37109b4.execute-api.us-west-2.amazonaws.com/prod)

## UML

<img src="./img/lab-18-uml.jpg"></img>

## Routes

- GET /friends/
    - Requires nothing
    - <code>Returns all friends</code>
        <img src="./img/read-terminal.jpg"></img>
        <img src="./img/read-dynamo.jpg"></img>

- POST /friends/:id 
    - Requires id, name & number
    - <code>Creates a specific friend</code>
        <img src="./img/create-terminal.jpg"></img>
        <img src="./img/create-dynamo.jpg"></img>

- PUT /friends/:id
    - Requires id
    -  <code>Updates & returns a specific friend</code>
        <img src="./img/update-terminal.jpg"></img>

- DELETE /friends/:id
    - Requires id
    - <code>Deletes a specific friend</code>
        <img src="./img/delete-terminal.jpg"></img>
        <img src="./img/delete-dynamo.jpg"></img>

