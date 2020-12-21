const { layout } = require('../utils');
const bcrypt = require('bcryptjs');
const { Lead } = require('../models');

//Home Page Controllers
const homeController = (req, res) => {
    res.render('home', {
        locals: {
            title: 'Home Page'
        },
        ...layout
    })
};

const processLead =  async (req, res) => {
    const { name, email, phone } = req.body;
    try {
        const newLead = await Lead.create({
            name,
            email,
            phone,
        });
        console.log(newLead);
    } catch(err) {
        console.log(err);
    }
    res.redirect('thankyou'); 
}

const thankYouPage = (req, res) => {
    res.render('thankyou', {
        locals: {
            title: 'Thank You Page'
        },
        ...layout
    });
}

module.exports = {
    homeController,
    processLead,
    thankYouPage
}