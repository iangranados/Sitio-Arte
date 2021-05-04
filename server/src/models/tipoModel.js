const mongoose = require('mongoose');

const tipoSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    precioBase : {
        type : Number,
        required : true
    },
    img : {
        type : String,
        required : true 
    }
});

mongoose.pluralize(null);

const TipoCollection = mongoose.model( 'tipo', tipoSchema );

const Tipo = {
    verTipos : function(){
        return TipoCollection
        .find()
        .then( tipos => {
            return tipos;
        })
        .catch( err => {
            return err;
        });
    },
    addNewTipo : function( newTipo ){
        return TipoCollection
        .create( newTipo )
        .then( createdTipo => {
            return createdTipo;
        })
        .catch( err => {
            return err;
        });
    },
    deleteTipo : function( name ){
        return TipoCollection
        .deleteOne( {name : name } )
        .then( results => {
            return results;
        })
        .catch( err => {
            return err;
        })
    },
    modificarTipo : function(name, newDes){
        return TipoCollection
        .updateOne({name : name}, {$set : {description : newDes}})
        .then( results => {
            return results;
        })
        .catch( err => {
            return err;
        });
    },
}

module.exports = { Tipo };