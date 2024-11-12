// models/Producto.js
const mongoose = require('mongoose');

// Definir el esquema de Producto
const productoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    marca: { type: String, required: true },
    dimensiones: { type: String, required: true },
    imagen: { type: String, required: true },
    precio_lista: { type: Number, required: true },
    precio_venta: { type: Number, required: true },
    caracteristicas: { type: String, required: true },
    proveedor: { type: String, required: true },
});

// Crear el modelo a partir del esquema
const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;