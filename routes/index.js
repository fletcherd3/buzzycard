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
    const { name, bio, snapchat, facebook, tikTok, email, instagram, github, site_link, site_name} = req.body;

    const newUser = new User({
        name,
        bio,
        snapchat,
        facebook,
        tikTok,
        email,
        instagram,
        github, 
        site_link,
        site_name,
        dateCreated: Date.now()
    });
    try {
        await newUser.save();
        res.json({
            message: 'Data successfully saved',
            statusCode: 200,
            name,
            bio,
            snapchat,
            facebook,
            tikTok,
            email,
            instagram,
            github, 
            site_link,
            site_name
        });
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({
            message: 'Internal Server error',
            statusCode: 500
        });
    }
});

router.post('/update/:id', async (req, res) => {
    try {
        console.log(req.body);
        await User.findByIdAndUpdate(req.params.id, req.body);
        return res.json({user});
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server error'
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