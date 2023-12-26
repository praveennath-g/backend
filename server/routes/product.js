const express = require('express');
const { getProducts } = require('../controllers/productcontroller');
const router = express.Router();


router.route('./products').get(getProducts);

module.exports=router