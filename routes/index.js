const express = require('express');
const { isEmpty } = require('lodash');
const User = require('../models/user');
const router = express.Router();

router.post('/add', async (req, res) => {
    if (isEmpty(req.body)) {
        return res.status(403).json({
            message: 'Body should not be empty',
            statusCode: 403
        });
    }
    const { name, cardID, bio, snapchat, facebook, tikTok, email, } = req.body;

    const newUser = new User({
        name,
        cardID,
        bio,
        snapchat,
        facebook,
        tikTok,
        email,
        dateCreated: Date.now()
    });
    try {
        await newUser.save();
        res.json({
            message: 'Data successfully saved',
            statusCode: 200,
            name,
            cardID,
            bio,
            snapchat,
            facebook,
            tikTok,
            email
        });
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({
            message: 'Internal Server error',
            statusCode: 500
        });
    }
});

router.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        return res.json({
            users
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }
       
});

router.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        return res.json({
            user
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
        });
    }
       
});


module.exports = router;