const express = require('express');
const app =  express();
const morgan = require('morgan');

//settings
app.set('port', 3000);
app.set('json spaces', 2);

// middelwares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//routes
//app.use('/api/v1/incoming', require('./routes/index'));
app.use('/api/v1/incoming', require('./routes/incoming'));

// Staring the server
app.listen(app.get('port'), () => {
    console.log("Server on port 3000");
});
