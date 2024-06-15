const express = require("express");
const app = express();
const path = require('path');
const port = 5000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname , './public/index.html'));
});

// Corrected the method from app.get to app.listen
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
