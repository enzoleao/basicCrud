const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");


const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"crudnew"
});

app.use(cors())
app.use(express.json());

app.post("/register", (req,res)=>{

    const {name} = req.body;
    const {valor} = req.body;
    const {codigo} = req.body;
    
    console.log(valor)
    let SQL = `INSERT INTO books (Nome, Preço, Codigo) VALUES (?,?,?)`;
    db.query(SQL,[name, valor, codigo], (err, result)=>{
        console.log(err);
    })
})

app.get("/getCards", (req,res)=>{
    let SQL = "SELECT * from books"
    db.query(SQL, (err, result)=>{
        if(err)console.log(err)
        else res.send(result)
    })
})

app.listen(4001, ()=>{
    console.log("rodando servidor");
})