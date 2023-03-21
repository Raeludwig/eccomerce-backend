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

async function init() {
  try {
    await sequelize.sync({ force: false });
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
  } catch (err) {
    console.error(err);
  }
}

init();

module.exports = router;