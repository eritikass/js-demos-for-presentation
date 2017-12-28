const express = require('express');
const moment = require('moment');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/json', (req, res) => res.json({
    'a': 1234, 
    'b': 'hello',
    'm': moment().format('MMMM Do YYYY, h:mm:ss a'),
}));


const port = 3421;
app.listen(port, () => console.log(`
Example app listening on port ${port}!

try http://localhost:${port}/json
`));