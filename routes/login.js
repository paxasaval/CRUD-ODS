const express = require('express');
const app = express();
const Usuario = require('../models/user')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

app.post('/login', (req, res) => {
})