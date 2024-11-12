// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importar cors
const productosRouter = require('./routes/apiroutes');

// Crear la aplicación Express
const app = express();

// Configurar CORS
app.use(cors()); // Esto habilita CORS para todos los dominios. Se puede configurar más si es necesario.

// Configurar el body-parser para que se puedan leer los cuerpos JSON
app.use(bodyParser.json());

// Conectar a MongoDB
mongoose.connect('mongodb+srv://av5328881:djlPzSNmIwRV2K1S@nosotrosdb.ecbnl.mongodb.net/?retryWrites=true&w=majority&appName=NosotrosDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Conexión a MongoDB exitosa');
}).catch((err) => {
    console.error('Error de conexión a MongoDB', err);
});

// Usar las rutas de productos
app.use('/api/productos', productosRouter);

// Iniciar el servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});