// 1. import and initialize app
const express = require("express");
const app = express();
const port = 3000

//2. define a simple route
app.get("/", (req, res) => {
    res.send("Oladimeji Hannah, how far na, i don sabi build website o, dont play wifff me!!!!");
});

//3. start the server
app.listen(port, "0.0.0.0", () => {
    console.log(`server running at http://localhost:${port}`);
});  