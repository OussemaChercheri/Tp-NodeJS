const express = require('express');
const app = express();

const voitureRouter = require('./routers/voiture');
const port = 3001;

app.use(express.json());

app.use('/voitures', voitureRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
