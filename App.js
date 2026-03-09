// 1. import and initialize app
const express = require("express");
const app = express();
const port = 3000

//2. define a simple route
app.get("/", (req, res) => {
    res.send("Olamitunde Oluwanishola my lovely and sweet brother, i just want to tell you that i have been able to run a website by myself and i'm grateful for your support, thank you so much and be ready to be sick of me using code to communicate with you sha");
});

//3. start the server
app.listen(port, "0.0.0.0", () => {
    console.log(`server running at http://localhost:${port}`);
});  