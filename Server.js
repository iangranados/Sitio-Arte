
const express = require('express');
const mongoose = require('mongoose');
const rutas = require('./server/src/routes/routes.js');
require('dotenv').config()

// Init
const app = express();
// Routes
app.use('/', rutas );

//app.use('/uploads', express.static('uploads'));


app.listen( 8080, () => {
  console.log( 'Sever on port ', 8080);

  const settings = {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true
};

new Promise( (resolve, reject) => {
    mongoose.connect(process.env.DATABASE_URL, settings, ( err ) => {
        if ( err ){
            reject( err );
        }
        else{
            console.log( "Database connected successfully." );
            return resolve();
        }
    })
})
.catch( err =>{
    mongoose.disconnect();
    console.log( err );
});

});
