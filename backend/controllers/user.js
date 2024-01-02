const Users = require('../models/userModel');

exports.getUsers = (req, res, next) => {
  Users.findAll()
    .then(users => {
      res.json(users);
    })
    .catch(err => console.log(err));
};

exports.postUser = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;

  Users
    .create({
      name: name,
      email: email,
      phone: phone,
    })
    .then(result => {
      res.json(result);
    })
    .catch(err => console.log(err));
};

exports.getEditUser = (req, res, next) => {

  const email = req.params.email;

  Users.findByPk(email)
    .then(user => {
      res.json(user.dataValues);
    })
    .catch(err => console.log(err));
};


exports.postDeleteUser = (req, res, next) => {

  const email = req.body.email;

  Users.findByPk(email)
    .then(user => {
      user.destroy();
      res.json(user);
    })
    .catch(err => console.log(err));

};