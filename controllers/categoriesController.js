const Category = require('../models/categoryModel');

const listCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCategoryById = async (req, res) => {
  const categoryId = req.params.id;

  try {
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ error: 'Categoria não encontrada!' });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createNewCategory = async (req, res) => {
  const { name, description } = req.body;
  
  try {
    const category = await Category.create({ name, description });
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateCategory = async (req, res) => {
  const categoryId = req.params.id;

  const { name, description } = req.body

  try {
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ error: 'Categoria não encontrada!' });
    }

    await category.update({ name, description });
    res.json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCategory = async (req, res) => {
  const categoryId = req.params.id;

  try {
    const category = await Category.findByPk(categoryId);
    if (!category) {
      return res.status(404).json({ error: 'Categoria não encontrada!' });
    }

    await category.destroy();
    res.json({ message: 'Categoria excluída com sucesso!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  listCategories,
  getCategoryById,
  createNewCategory,
  updateCategory,
  deleteCategory,
};
