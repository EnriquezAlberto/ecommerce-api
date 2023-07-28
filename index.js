const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

//middleware

app.use(bodyParser.json());
app.use(cors());

let productos = [
    { id: 1, nombre: 'Producto1', precio: 240},
    { id: 1, nombre: 'Producto2', precio: 430},
    { id: 1, nombre: 'Producto3', precio: 440},
    { id: 1, nombre: 'Producto4', precio: 530},
    { id: 1, nombre: 'Producto5', precio: 350},
];

//Rutas

app.get('/api/productos', (req, res) => {
    res.json(productos);
});

app.post('/api/productos', (req, res) => {
    const { id, nombre , precio} = req.body;
    const nuevoProducto = { id, nombre, precio};
    productos.push(nuevoProducto);
    res.status(201).json(nuevoProducto)
});

app.put('api/productos/:id', (req, res)=> {
    const id = parseInt(req.params.id)
    const {nombre, precio} = req.body;
    const productosIndex = productos.findIndex((product) => product.id  === id);
    if (productosIndex !== -1) {
        productos[productosIndex] = { ...productos[productosIndex], nombre, precio };
        res.json(productos[productosIndex]);
      } else {
        res.status(404).json({ message: 'Producto no encontrado' });
      }
    });

    app.delete('/api/productos/:id', (req, res)=> {
        const id = parseInt(req.params.id);
        productos = productos.filter((product) => product.id !==id);
        res.json({mensaje: 'Producto eliminado correctamente'})
    });

    app.listen(port, () => {
        console.log(`Servidor en funcionamiento en http://localhost:${port}`);
    })
   