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
    description: {
        type : String,
        required : true
    },
    token: {
        type : String,
        required : true
    },
    status: {
        type: String,
        required : true
        // Pending || Aproved || Working On || Completed
    },
    avance: {
        type: Number,
        required: true
    },
    comments: {
        type: [Object],
        required: true
    },
    archivos: {
        type: [String],
        required: true
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
            throw err;
        });
    },
    verComisionesStatus : function( status ){
        return ComisionCollection
        .find( { status: {$eq: status}})
        .then( comisiones => {
            return comisiones;
        })
        .catch( err => {
            throw err;
        });
    },
    addNewComision : function( newComision ){
        return ComisionCollection
        .create( newComision )
        .then( crearedComision => {
            return crearedComision;
        })
        .catch( err => {
            throw err;
        });
    },
    deleteComision : function( token ){
        return ComisionCollection
        .deleteOne( {token : token } )
        .then( results =>{
            return results;
        })
        .catch( err => {
            throw err;
        });
    },
    modificarComisionDes : function(id, token, newDes){
        return ComisionCollection
        .updateOne({token : token, _id: id}, {$set : {description : newDes}})
        .then( results => {
            return results;
        })
        .catch( err => {
            throw err;
        });
    },
    getComisionById : function( id, token ){
        return ComisionCollection
        .findOne( {token : token, _id: id})
        .then( results => {
            return results;
        })
        .catch( err => {
            throw err;
        })
    },
    modificarComisionAvance : function( token, newAvance ){
        return ComisionCollection
        .updateOne({token : token}, {$set : {avance : newAvance}})
        .then( results => {
            return results;
        })
        .catch( err => {
            throw err;
        })
    },
    changeStatus : function( token, newStatus){
        return ComisionCollection
        .updateOne({token : token}, {$set : {status : newStatus}})
        .then( results => {
            return results;
        })
        .catch( err => {
            throw err;
        })
    },
    addComment : function( token, newComment ) {
        return ComisionCollection
        .updateOne(
            { token: token }, 
            { $push: { comments: newComment }})
        .then( results => {
            return results;
        })
        .catch( err => {
            throw err;
        })
    },
    addArchivo : function( token, newArchivo ) {
        return ComisionCollection
        .updateOne(
            { token: token }, 
            { $push: { archivos: newArchivo }})
        .then( results => {
            return results;
        })
        .catch( err => {
            throw err;
        })
    },
    changeContactInfo : function( id, token, newName, newContact, newUsername ){
        return ComisionCollection.updateOne({ _id: id, token : token}, {$set : {
            name : newName,
            contact : newContact,
            username : newUsername
        }})
    }
}

module.exports = { Comision };