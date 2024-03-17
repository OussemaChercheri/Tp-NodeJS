const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// Get all posts
router.get('/getall', async (req, res) => {
    try {
        const posts = await Post.find({});
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

// Create a new post
router.post('/add', async (req, res) => {
    try {
        let data = req.body;
        let post = new Post(data);
        const savedPost = await post.save();
        res.status(201).json(savedPost);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

// Get one specific post by its id
router.get('/getbyid/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const post = await Post.findById(id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

// Update an existing post with the provided id
router.put('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { title, description } = req.body;
        const updatedPost = await Post.findByIdAndUpdate(id, { title, description }, { new: true });
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

// Delete an existing post with the provided id
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedPost = await Post.findByIdAndDelete(id);
        res.status(200).json(deletedPost);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
