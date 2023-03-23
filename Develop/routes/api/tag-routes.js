const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');



//find all tags
router.get('/', async (req, res) => {
  const tag = await Tag.findAll({
    include: [
      { model: Product, through: ProductTag }
    ]
  })
  res.json(tag)
});

//find tag by id
router.get('/:id', async (req, res) => {
  const tag = await Tag.findByPk(req.params.id, {
    include: [
      { model: Product, through: ProductTag }
    ]
  })
  res.json(tag)
});


// create a new tag
router.post('/',async (req, res) => {
  try {
    const tag = await Tag.create(req.body)
    res.status(200).json(tag)
  }
  catch (error) {
    res.status(400).json(error)
  }
  
});


// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const tag = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(tag)
  }
  catch (error) {
    res.status(400).json(error)
  }
});


 // delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const tag = await Tag.destroy({
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
