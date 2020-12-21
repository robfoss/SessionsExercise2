const { User } = require('../models');
const { layout } = require('../utils');
const bcrypt = require('bcryptjs');

const loginController = (req, res) => {
    res.render('login', {
        locals: {
            title: 'Login Page',
            pageTitle: 'Login Page'
        },
        ...layout
    })
};



module.exports = {
    loginController,
}