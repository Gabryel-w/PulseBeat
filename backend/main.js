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
    console.log(req.body.name);
    console.log(req.body.email)

    res.send("Done!")
})
app.post('/Login', (req, res) =>{
    console.log(req.body.name);
    console.log(req.body.email)

    res.send("Done!")
})


// Listen to the determined port
app.listen(PORT, () => {
    console.log(`server on http://localhost:${PORT}`);
})


// End DB connection
conn.end()