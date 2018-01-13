const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/unauth', (req, res) => {
    res.status(401).end();
});

app.post('/greetings', (req, res) => {
    let greetings = [];
    greetings.push({"casual": `sup ${req.body.name}`});
    greetings.push({"formal": `Welcome, ${req.body.name}`});
    greetings.push({"regular": `Hi, ${req.body.name}`});
    res.status(201);
    res.send(greetings);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));