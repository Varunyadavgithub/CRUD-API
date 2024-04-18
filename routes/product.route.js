const express=require('express');
const Product=require('../models/product.model');
const router=express.Router();
const {getProducts,getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller');

// Create-API

//API to create Product.
router.post('/',createProduct);

//API to get all Products.
router.get('/',getProducts);

//API to get specific Product by there id. Ex: id = 66211d096bb445dc8e7d4f50
router.get('/:id',getProduct);


// Update-API

//API to update a specific Product by there id.
router.put('/:id',updateProduct);

// Delete-API

//API to delete a specific Product by there id.
router.delete('/:id',deleteProduct);
       

module.exports=router;