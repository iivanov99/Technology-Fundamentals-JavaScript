const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const port = 8080;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.send('<h1>Hello World!</h1>');
});

app.get('/cat/:catName', function (req, res) {
    const cat = { name: req.params.catName };
    res.render('cat-info', { cat, layout: false });
});

app.listen(port, () => {
    console.log(`Server litening on port ${port}...`);
});