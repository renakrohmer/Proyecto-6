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


router.post('/', protegerRuta, createProduct); 
router.get('/', getAllProducts); 
router.get('/:id', getProductById); 
router.put('/:id', protegerRuta, updateProduct); 
router.delete('/:id', protegerRuta, deleteProduct); 

module.exports = router;
