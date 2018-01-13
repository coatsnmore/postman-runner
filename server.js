const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// for parsing application/json
app.use(bodyParser.json()); 
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/unauth', (req, res) => {
    // console.log(`req: ${json}`);
    // res.status(401);
    // res.end();
    res.status(401).end();
});

app.post('/greetings', (req, res) => {
    console.log(`body: ${req.body}`);
    // let json = JSON.parse(req.body);
    let greetings = [];
    greetings.push({
        "casual": `sup ${req.body.name}`
    });

    greetings.push({
        "formal": `Welcome, ${req.body.name}`
    });

    greetings.push({
        "regular": `Hello, ${req.body.name}`
    });

    // console.log(`req: ${json}`);
    res.send(greetings);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));