const mongoose = require('mongoose');

const portafolioSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    link : {
        type : String,
        required : true
    },
    img: {
        data: Buffer,
        contentType: String,
        required : true
    }
});

mongoose.pluralize(null);

const PortafolioCollection = mongoose.model( 'Portafolios', portafolioSchema );

const Portafolios = {
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
    verPortafolio : function(){
        return PortafolioCollection
        .find()
        .then( galeria => {
            return galeria;
        })
        .catch( err => {
            return err;
        });
    }
}