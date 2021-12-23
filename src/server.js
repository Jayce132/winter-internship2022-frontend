const express = require('express');
const path = require('path'); // NEW

const app = express();
const port = 3000;
const HTML_FILE = path.join(__dirname, 'index_final.html'); // NEW
const DIST_DIR = path.join(__dirname, '../dist');
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

console.log(HTML_FILE)
// parse application/json
app.use(bodyParser.json())
app.use("/", express.static(__dirname));
app.use(express.static(DIST_DIR));

app.post('/posted', (req, res) => {
    console.log(req.body)
    res.sendFile(HTML_FILE); // EDIT
});

app.get('/', (req, res) => {
    res.sendFile("Im the server."); // EDIT
});

app.listen(port, function () {
    console.log('App listening on port: ' + port);
});