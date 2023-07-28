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

