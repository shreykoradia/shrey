const path = require('path');
const  express = require('express');
const app = express();

// creating a public folder for static files !
app.use(express.static(path.join(__dirname , 'public')));

const port = 3010 || process.env.port ;

app.get('/' , (req , res)=>{
  res.sendFile('/public/index.html' , {root : __dirname} );
})

app.get('/about' ,(req ,res)=>{
  res.status(200);
  res.sendFile('/public/about.html' , {root : __dirname} );
})

app.get('/projects' ,(req , res)=>{
  res.status(200);
  res.sendFile('/public/project.html' ,{root :__dirname})
})

app.get('/contact' , (req , res)=>{
  res.status(200);
  res.sendFile('/public/contact.html' ,{root :__dirname})
})


app.all('*', (req, res, next) => {
    res.status(404);
    res.sendFile('/public/404.html' , {root:__dirname});
});




 app.listen(port, () => {
    console.log(`Server running  on ${port}`);
});

