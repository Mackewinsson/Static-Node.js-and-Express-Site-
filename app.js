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

     //   1. Parse data
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// ROUTING

app.get('/',(req, res, next)=>{
     res.render('index', {projects});
});

app.get('/about',(req, res, next)=>{
     res.render('about');
})

app.get('/project/:id',(req, res, next)=>{
     const projectId = req.params.id;
     const project = projects.find((element)=>{

          if(element.id === projectId){
               return element
          };
     });
     console.log(project);
     if(project){
          res.render('project', project)
     }else{
          res.sendStatus(404)
     };
    
});

app.use((req, res, next) =>
    {
        const err = new Error('Not found')
        err.status = 404;
        next(err);
    });

app.use((err, req, res, next) =>
    {
        res.locals.error = err;
        res.status(err.status);
        res.render('error');
    });

const port = 3000;
app.listen(port);
console.log(`App is running on port ${port}`);