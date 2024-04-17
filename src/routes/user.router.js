const { getAll, create, getOne, remove, update, verifyCode, login, getUserLogged } = require('../controllers/user.controllers');
const express = require('express');
const { verifyJwt } = require('../utils/verifiyJWT')

const routerUser = express.Router();

routerUser.route('/')
    .get(verifyJwt, getAll)
    .post(create);

routerUser.route('/verify/:code')
    .get(verifyCode)

routerUser.route('/login')
    .post(login)

routerUser.route('/me')
    .get(verifyJwt, getUserLogged)

routerUser.route('/:id')
    .get(verifyJwt, getOne)
    .delete(verifyJwt, remove)
    .put(verifyJwt, update);

module.exports = routerUser;
