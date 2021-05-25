const mongoose = require('mongoose');

const tiendaSchema = mongoose.Schema({
    titulo : {
        type : String,
        required : false
    },
    categoria : {
        type : String,
        required : true
    },
    precio : {
        type : String,
        required : true
    },
    img: {
        type : String,
        required : true
    },
    status: {
        type : String,
        required : true
    }
});

mongoose.pluralize(null);

const TiendaCollection = mongoose.model( 'prefabs', tiendaSchema );

const Tienda = {
    verTienda : function(){
        return TiendaCollection.find()
    },
    addNewItem : function( newItem ){
        return TiendaCollection.create( newItem )
    },
    deleteItem : function( id ){
        return TiendaCollection.deleteOne( {_id : id } )
    },
    modificarImagen : function(id, newImg){
        return TiendaCollection.updateOne({_id : id}, {$set : {img : newImg}})
    },
    modificarStatus : function(id, newStatus){
        return TiendaCollection.updateOne({_id : id}, {$set : {status : newStatus}})
    },
    modificarItem : function( id, newCate, newTitulo, newPrecio ){
        return ComisionCollection.updateOne({ _id : id}, {$set : {
            titulo : newTitulo,
            categoria : newCate,
            precio : newPrecio
        }})
    }
}

module.exports = { Tienda };