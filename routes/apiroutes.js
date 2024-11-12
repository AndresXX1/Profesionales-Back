// routes/productos.js
const express = require('express');
const productoController = require('../controllers/productos');

const router = express.Router();

// Ruta para obtener todos los productos
router.get('/', productoController.getProductos);

// Ruta para crear un nuevo producto
router.post('/', productoController.createProducto);

// Ruta para actualizar un producto
router.put('/:id', productoController.updateProducto);

//Ruta para detalle de un producto
router.get('/detail/:id', productoController.getProductoById);

module.exports = router;
