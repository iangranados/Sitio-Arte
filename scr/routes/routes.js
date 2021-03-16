const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { Portafolio } = require('../models/portafolioModel')
const { Users } = require( '../models/usuarioModel' );
const jsonParser = bodyParser.json();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
})
const upload = multer({storage: storage});

const app = express();
router.use( jsonParser );

// Ruta para obtener todas las imagenes
router.get( '/galeria', ( req, res ) => {
    Portafolio
    .verPortafolio()
    .then( result => {
        return res.status( 200).json( result );
    })
    .catch( err => {
        res.statusMessage = "Something went wrong with the DB";
        return res.status( 500 ).end();
    })
});

// Ruta para agregar una nueva imagen
router.post( '/addImage', upload.single('img'), ( req, res ) => {

    console.log(req.file);

    let { nameImage, link } = req.body;
    let img = req.file.path;

    if(!nameImage || !link){
        res.statusMessage = "Please send all the fields required";
        return res.status( 406 ).end()
    }

    const newImage = { nameImage, link, img}

    Portafolio
    .addNewImage( newImage )
    .then( results => {
        return res.status( 201 ).json( results );
    })
    .catch( err => {
        res.statusMessage =  "Somethong went wrong with the DB";
        return res.status( 500 ).end();
    });
});

// Ruta para borrar una iamgen
router.delete('/borrarImagen/:nameImage', ( req, res ) => {

    let nameImage = req.params.nameImage;

    if(!nameImage){
        res.statusMessage = "Please send the product to delete";
        return res.status( 406 ).end()
    }
    Portafolio.deleteImage( nameImage )
    .then( result => {
        if(result.deletedCount > 0){
            return res.status( 200 ).end();
        }
        else{
            res.statusMessage = "That product was not found in the db";
            return res.status( 404 ).end();
        }
    })
    .catch( err => {
        res.statusMessage =  "Somethong went wrong with the DB";
        return res.status( 500 ).end();
    })
});

// Ruta para modificar el link de una iamgen
router.patch('/modificarImagen/:nameImage', ( req, res ) => {
    let nameImage = req.params.nameImage;
    let newLink = req.body.link;

    if(!nameImage || !newLink){
        res.statusMessage = "Please send all the fields required";
        return res.status( 406 ).end()
    }

    Portafolio
    .modificarImage(nameImage, newLink)
    .then( results => {
        if(results.nModified > 0){
            return res.status( 202 ).end();
        }
        else{
            res.statusMessage = "There is no iamge with the name passed";
            return res.status( 409 ).end();
        }
    })
    .catch( err => {
        res.statusMessage =  "Somethong went wrong with the DB";
        return res.status( 500 ).end();
    })
})

// Ruta para obtener los clientes
router.get( '/clientes', ( req, res ) => {
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

module.exports = router;