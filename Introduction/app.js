const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Exemple app listening on port ${port}`)
})

app.get('/index', (req, res) =>{
    res.send(`<h1>Page HTML</h1>`)
})

app.get('/home', (req, res) =>{
    res.json({etudiant:"Ahmed", note:15})
})

app.get('/exemple', (req, res, next) => {
    console.log('La réponse sera envoyée par la fonction suivante... '); next();

}, (req, res) => { res.send('Hello from B!');})