
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rutas = require('./server/src/routes/routes.js');
const session = require('express-session');
require('dotenv').config()


// Init
const app = express();

// App Config
app.use(cors());

// Routes
app.use('/', rutas );


app.listen( 8000, () => {
  console.log( 'Sever on port ', 8000);

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
