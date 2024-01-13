const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 8080;
const app = express();
const PATH = path.resolve(__dirname)

app.use(express.static(path.resolve(__dirname, '../frontend')));

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'));
})


app.listen(PORT, () => {
    console.log(`server on http://localhost:${PORT}`);
})