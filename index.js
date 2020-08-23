const express = require('express');

const app = express();

<<<<<<< HEAD
app.get('/test2', (req, res) => {
    return res.json({hello: 'world 2'})
=======
app.get('/test3', (req, res) => {
    return res.json({hello: 'world 3'})
>>>>>>> master
});

app.listen(3333);