const mongoose = require('mongoose');

const comisionSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    contact : {
        type : String,
        required : true
    },
    username: {
        type : String,
        required : true
    },
    tipo: {
        type : String,
        required : true
    },
    completed: {
        type : Boolean,
        required : false
    },
    description: {
        type : String,
        required : true
    },
    token: {
        type : String,
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
    deleteComision : function( token ){
        return ComisionCollection
        .deleteOne( {token : token } )
        .then( results =>{
            return results;
        })
        .catch( err => {
            return err;
        });
    },
    modificarComisionDes : function(token, newDes){
        return ComisionCollection
        .updateOne({token : token}, {$set : {description : newDes}})
        .then( results => {
            return results;
        })
        .catch( err => {
            return err;
        });
    },
    completarComision : function(token, completed){
        return ComisionCollection
        .updateOne({token : token}, {$set : {completed : completed}})
        .then( results => {
            return results;
        })
        .catch( err => {
            return err;
        });
    },
    getComisionByToken : function( token ){
        return ComisionCollection
        .find( {token : token})
        .then( results => {
            return results;
        })
        .catch( err => {
            return err;
        })
    }
}

module.exports = { Comision };