const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 8080;
const app = express();


app.use(express.static(path.resolve(__dirname, '../frontend')));

app.get('/', (req, res) =>{
    console.log(`${req.baseUrl}/${req.url}`);
    res.send("WELCOME!");
})


app.listen(PORT, () => {
    console.log(`server on http://localhost:${PORT}`);
})