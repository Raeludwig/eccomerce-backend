const router = require('express').Router();
const apiRoutes = require('./api');

const sequelize = require('../config/connection');
const Category = require('../models/Category');
const Product = require('../models/Product');
const Tag = require('../models/Tag');
const ProductTag = require('../models/ProductTag');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});


module.exports = router;