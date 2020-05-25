// REQUIRED MODULES
const express = require('express');
const app = express();
// REQUIRE DATA
const { projects } = require('./data.json');
// SETTINGS

app.set('view engine', 'pug');

// MIDDLEWARES
//   1. Static files
app.use(express.static('public'));


// ROUTING


app.all('/',(req, res, next)=>{
     res.render('index');

})

console.log('App is running on port 3000')
app.listen('3000');