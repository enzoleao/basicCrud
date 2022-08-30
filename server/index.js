const express = require("express");
const app = express();
const mysql = require("mysql")
const cors
const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"crudnew"
});



app.listen(4001, ()=>{
    console.log("rodando servidor");
})