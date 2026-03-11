// 1. import and initialize app
const express = require("express");
const app = express();
const port = 3000

//2. define a simple route
app.get("/add/:num1/:num2", (req, res) => {
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);

    const result = num1 + num2;
    res.send(`Result: ${result}`);
});

//3. start the server
app.listen(port, "0.0.0.0", () => {
    console.log(`server running at http://localhost:${port}`);
});  