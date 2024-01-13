// CONST DECLARATIONS
const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 8080;
const app = express();
const PATH = path.resolve(__dirname)


// Serving static files
app.use(express.static(path.resolve(__dirname, '../frontend')));
app.use(express.static(path.resolve(__dirname, '../frontend/build')));


// Routes
app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, '../frontend/build', "index.html"));
})
app.post('/login', (req, res) =>{
    res.sendStatus(200)
})


// Listen to the determined port
app.listen(PORT, () => {
    console.log(`server on http://localhost:${PORT}`);
})