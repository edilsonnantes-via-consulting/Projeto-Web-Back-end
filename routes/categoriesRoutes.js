const express = require('express');
const categoriesController = require('../controllers/categoriesController');

const router = express.Router();

router.get('/', categoriesController.listCategories);

router.get('/:id', categoriesController.getCategoryById);

router.post('/', categoriesController.createNewCategory);

router.put('/:id', categoriesController.updateCategory);

router.delete('/:id', categoriesController.deleteCategory);

module.exports = router;
