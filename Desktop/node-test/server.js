const express = require('express');

const app= express();
app.get('/', (req, res)=> res.send('Hello World with Express!'));

app.listen(8080);
console.log("server on port 8080");