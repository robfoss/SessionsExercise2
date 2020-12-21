const { Users  } = require('../models');
const { layout } = require('../utils');
const bcrypt = require('bcryptjs');


const registerController = (req, res) => {
    res.render('register', {
        locals: {
            title: 'Sign Up',
            pageTitle: 'New Account'
        },
        ...layout
    });
};

const processRegistration =  async (req, res) => {
    const { username, password } = req.body;
    if(username === '' || password === ''){
        console.log('username or password is blank');
        res.redirect('/');
    } else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        try {
            const newUser = await Users.create({
                username,
                hash
            });
            res.redirect('/login');
        } catch (err) {
            console.log(err);
            if(err.name === "SequelizeUniqueConstraintError"){
                console.log('Username taken')
            }
            res.redirect('/register')
        }
    }
}


module.exports = {
    registerController,
    processRegistration
}