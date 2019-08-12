const express = require('express');
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

// app Decleration
const app = express();

const port = 3006;

app.get('/api/products', getProducts)

app.get('/api/product/:id', getProduct)

app.listen(port, () => {
    console.log('We are go for takeoff')
})

