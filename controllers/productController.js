const Product = require('../models/Product');

const createProduct = async (req, res) => {
  const { nombre, descripcion, precio, stock, categoria } = req.body;

  if (!nombre || !precio || !stock || !categoria) {
    return res.status(400).json({ message: 'Faltan datos necesarios' });
  }

  try {
    const newProduct = new Product({
      nombre,
      descripcion,
      precio,
      stock,
      categoria,
      creadoPor: req.usuario._id, 
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    console.error('Error al crear producto:', err);  
    res.status(500).json({ message: 'Error al crear producto: ' + err.message });
  }
};


const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Producto no encontrado' });
    res.status(200).json({ message: 'Producto eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
};
