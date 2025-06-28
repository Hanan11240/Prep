const express = require('express')
const app = express();


app.use((req, res, next) => {
    // Allow requests from any origin
    res.header("Access-Control-Allow-Origin", "*");
    // Allow these HTTP methods
    res.header("Access-Control-Allow-Methods", "POST, PUT, DELETE, OPTIONS");
    // Allow these request headers
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    res.header("Access-Control-Allow-Origin", "*");

    if(req.method === "OPTIONS"){
        return res.sendStatus(204); // No Content


    }

    next();

})

app.get('/api/data', (req, res) => {
  res.json({ message: "CORS is working!" });
});

app.listen(3000,()=>{
    console.log("Server is listening at 300")
})