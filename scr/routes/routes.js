const express = require('express');
const bodyParser = require('body-parser');
//const { Portafolio } = require('../models/portafolioModel');
const { Users } = require( '../models/usuarioModel' );
const app = express();

// Ruta para obtener todas las imagenes
/*router.get( '/galeria', ( req, res ) => {
    Portafolio
    .verPortafolio()
    .then( result => {
        return res.status( 200).json( result );
    })
    .catch( err => {
        res.statusMessage = "Something went wrong with the DB";
        return res.status( 500 ).end();
    })
});*/

// Ruta para obtener los clientes
app.get( '/clientes', ( req, res ) => {
    Users
    .verClientes()
    .then( result => {
        return res.status( 200).json( result );
    })
    .catch( err => {
        res.statusMessage = "Something went wrong with the DB";
        return res.status( 500 ).end();
    })
});
