const express = require("express");
const app = express();
const port =  3000;

app.get('/', (req, res) => {
    res.send('Hello World listen to me');
})

app.listen(port, () =>{
    console.log(`server run on port $ {port}`);
})