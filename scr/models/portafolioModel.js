const mongoose = require('mongoose');

const portafolioSchema = mongoose.Schema({
    nameImage : {
        type : String,
        required : true
    },
    link : {
        type : String,
        required : true
    },
    img: {
        type : String,
        required : true
    }
});

mongoose.pluralize(null);

const PortafolioCollection = mongoose.model( 'portafolio', portafolioSchema );

const Portafolio = {
    verPortafolio : function(){
        return PortafolioCollection
        .find()
        .then( galeria => {
            return galeria;
        })
        .catch( err => {
            return err;
        });
    },
    addNewImage : function( newImage ){
        return PortafolioCollection
        .create( newImage )
        .then( createdImage => {
            return createdImage;
        })
        .catch( err => {
            return err;
        });
    },
    deleteImage : function( nameImage ){
        return PortafolioCollection
        .deleteOne( {nameImage : nameImage } )
        .then( results =>{
            return results;
        })
        .catch( err => {
            return err;
        });
    },
    modificarImage : function(name, newLink){
        return ProductoCollection
        .updateOne({name : name}, {$set : {link : newLink}})
        .then( results => {
            return results;
        })
        .catch( err => {
            return err;
        });
    },
}

module.exports = { Portafolio };