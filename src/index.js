const express = require('express');
const path = require('path');
const app = express();    
// const port= 3000
app.set('view engine', 'ejs');

app.set('views', './views');

const product= {
        id: 1,
        nombre:'coca cola',
        precio: 200
    }  
app.get('/', (req, res) =>{  res.render(path.join(__dirname, 'views/vistas/bienvenido.ejs'),{product})} )

// app.use(express.static(path.join(__dirname, 'public')));
 
app.listen(3000, () => console.log('Example app listening on port', 3000))
