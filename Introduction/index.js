const express = require('express');
const auth = require('.routes/auth');
const app = express();
const port = 3000;

app.use('/auth', auth);
app.use('/post', post);
app.listen(port, () => {
    console.log(`Exemple app listening on port ${port}`)
})
