const mongoose = require('mongoose');

const comisionSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    precio : {
        type : String,
        required : true
    },
    tipo: {
        type : String,
        required : true
    },
    avance: {
        type : Number,
        required : true
    },
    username: {
        type : String,
        required : true
    },
    completed: {
        type : Boolean,
        required : true
    }
});

mongoose.pluralize(null);

const ComisionCollection = mongoose.model( 'comision', comisionSchema );

const Comision = {
    verComisiones : function(){
        return ComisionCollection
        .find()
        .then( comisiones => {
            return comisiones;
        })
        .catch( err => {
            return err;
        });
    },
    addNewComision : function( newComision ){
        return ComisionCollection
        .create( newComision )
        .then( crearedComision => {
            return crearedComision;
        })
        .catch( err => {
            return err;
        });
    },
    deleteComision : function( name ){
        return ComisionCollection
        .deleteOne( {name : name } )
        .then( results =>{
            return results;
        })
        .catch( err => {
            return err;
        });
    },
    modificarComisionAvance : function(name, newAvance){
        return ComisionCollection
        .updateOne({name : name}, {$set : {avance : newAvance}})
        .then( results => {
            return results;
        })
        .catch( err => {
            return err;
        });
    },
    completarComision : function(name, completed){
        return ComisionCollection
        .updateOne({name : name}, {$set : {completed : completed}})
        .then( results => {
            return results;
        })
        .catch( err => {
            return err;
        });
    },
    getComisionByName : function( username ){
        return ComisionCollection
        .find( {username : username})
        .then( results => {
            return results;
        })
        .catch( err => {
            return err;
        })
    }
}

module.exports = { Comision };