// Librarys
const express = require("express");
const path = require("path");
const mysql = require("mysql");


// Constants
const PORT = process.env.PORT || 8080;
const app = express();
const PATH = path.resolve(__dirname)


const conn = mysql.createConnection({ 
    host:"localhost",
    user:"root",
    password:"Jm11072!",
    database:"users"
})

// Start DB connection
conn.connect()

// Middleware
app.use(express.json())

// Serving static files
app.use(express.static(path.resolve(__dirname, '../frontend')));
app.use(express.static(path.resolve(__dirname, '../frontend/build')));


// Routes
app.get('*', (req, res) =>{
    res.sendFile(path.resolve(__dirname, '../frontend/build', "index.html"));
})
app.post('/Cadastro', (req, res) =>{
    var name = req.body.nome;
    var email = req.body.email;
    var password = req.body.senha;

    var getUser = `SELECT * from user WHERE name = '${name}'`
    conn.query(getUser, (err, result) =>{
        if (err) throw err;
        if (result.length > 0){
            return res.status(403).json({response:0});
        } else {
            var insertSql = `INSERT INTO user (name, email, password) VALUES ('${name}', '${email}', '${password}')`
            conn.query(insertSql, (err, result)=> {
                if (err){
                    throw err;
                }
                console.log("inserted values into user");
                return res.status(200).json({response:1});
            });
        }
    })
})

app.post('/Login', (req, res) =>{
    var name = req.body.loginNome
    var password = req.body.loginSenha

    var sql = `SELECT * FROM user WHERE name = '${name}'`
    
    
    conn.query(sql, (err, result) =>{
        if (err) throw err;

        if (result.length >0){
            if (password == result[0].password){
                console.log("allowed");
                console.log("user", result[0].id, "connected");
                return res.status(200).json({response:'allowed'});
            }
        }

        console.log("forbidden");
        return res.status(403).json({response:'forbidden'});

    })
})


// Listen to the determined port
app.listen(PORT, () => {
    console.log(`server on http://localhost:${PORT}`);
})

