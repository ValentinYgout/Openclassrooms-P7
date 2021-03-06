const bcrypt =require('bcrypt')
const User =require('../models/User')
const jwt = require('jsonwebtoken');
require ('dotenv').config();

const hashkey=process.env.HASHKEY

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const user = new User({
          username: req.body.username,
          email: req.body.email,
          password: hash,
          roles:{"User":2001}
        });
        user.save()
          .then(() => res.status(201).json({ message: 'User created' }))
          .catch(error =>res.status(400).send(error.message));
      })
      .catch(error => res.status(500));
};

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (!user) {
            
          return res.status(401).json({ error: 'User not found' });
        }
        bcrypt.compare(req.body.password, user.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({error:'Incorrect password' });
            }
            res.status(200).json({
              userId: user._id,
              username: user.username,
              roles: user.roles,
              token: jwt.sign(
                { userId: user._id },
                hashkey,
                { expiresIn: '24h' }
              )
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };