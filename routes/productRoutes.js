const express = require('express');
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

const protegerRuta = require('../middleware/authMiddleware');

// Rutas RESTful mejoradas
router.post('/', protegerRuta, createProduct); // Ruta para crear producto
router.get('/', getAllProducts); // Ruta para obtener todos los productos
router.get('/:id', getProductById); // Ruta para obtener un producto específico
router.put('/:id', protegerRuta, updateProduct); // Ruta para actualizar producto
router.delete('/:id', protegerRuta, deleteProduct); // Ruta para eliminar producto

module.exports = router;
