const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

function gFile(file, dirname="public"){
    return __dirname+`/${dirname}/`+file;
}

app.get('/', (req, res) => {
    res.sendFile(gFile(`index.html`));
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});