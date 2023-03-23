const router = require('express').Router();
const { Category, Product } = require('../../models');




  // find all categories
router.get('/', async (req, res) => {
  const categories = await Category.findAll({
    include: [
      Product
    ]
  })
  res.json(categories)

});



 // find one category by its `id` value
router.get('/:id', async (req, res) => {
  const category = await Category.findByPk(req.params.id, {
    include: [
      Product
    ]
  })
  res.json(category)
});


  // create a new category
router.post('/', async (req, res) => {
  try {
    const category = await Category.create(req.body)
    res.status(200).json(category)
  }
  catch (error) {
    res.status(400).json(error)
  }
});


  // update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const category = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(category)
  }
  catch (error) {
    res.status(400).json(error)
  }

});


// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const category = await Category.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(category)
  }
  catch (error) {
    res.status(400).json(error)
  }
  
});

module.exports = router;
