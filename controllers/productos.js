const Producto = require('../models/productos');

// Obtener todos los productos
const getProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un producto por ID
const getProductoById = async (req, res) => {
  const { id } = req.params;
  
  try {
    const producto = await Producto.findById(id);
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo producto
const createProducto = async (req, res) => {
  const { nombre, marca, dimensiones, imagen, precio_lista, precio_venta, caracteristicas, proveedor } = req.body;

  if (!nombre || !marca || !dimensiones || !imagen || !precio_lista || !precio_venta || !caracteristicas || !proveedor) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  const producto = new Producto({
    nombre,
    marca,
    dimensiones,
    imagen,
    precio_lista,
    precio_venta,
    caracteristicas,
    proveedor,
  });

  try {
    const nuevoProducto = await producto.save();
    res.status(201).json({ message: 'Producto creado con éxito', producto: nuevoProducto });
  } catch (error) {
    res.status(400).json({ message: 'Error al crear el producto: ' + error.message });
  }
};

// Actualizar un producto
const updateProducto = async (req, res) => {
  const { id } = req.params;
  const { nombre, marca, dimensiones, imagen, precio_lista, precio_venta, caracteristicas, proveedor } = req.body;

  try {
    const producto = await Producto.findById(id);

    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    // Actualizar los campos
    producto.nombre = nombre || producto.nombre;
    producto.marca = marca || producto.marca;
    producto.dimensiones = dimensiones || producto.dimensiones;
    producto.imagen = imagen || producto.imagen;
    producto.precio_lista = precio_lista || producto.precio_lista;
    producto.precio_venta = precio_venta || producto.precio_venta;
    producto.caracteristicas = caracteristicas || producto.caracteristicas;
    producto.proveedor = proveedor || producto.proveedor;

    // Guardar el producto actualizado
    const productoActualizado = await producto.save();

    res.json(productoActualizado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProductos,
  getProductoById, // Agregar este método
  createProducto,
  updateProducto,
};
