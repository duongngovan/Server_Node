const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) =>{
    res.send("hello world");
})

const server = app.listen(port,  ()=>{
      const host = server.address().address;
      const port = server.address().port;
    console.log("Listen node server :  http://%s:%s", host, port)
});