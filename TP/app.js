const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const authRouter = require('./routes/auth')
const voitureRouter = require('./routers/voiture');
const postRouter = require('./routes/post.routes');
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 3001;
app.use(express.json());

app.use('/auth', authRouter)
app.use('/voitures', voitureRouter);
app.use('/posts', postRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

mongoose.connect(MONGODB_URI).then(()=>{
    console.log('connected to MongoDb');
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    })}).catch((err)=>{console.error(err);
})
