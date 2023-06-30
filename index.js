// Modules and Globals
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')


// Initialize the app object
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use('/places', require('./controllers/places'))

// Create a homepage route
app.get('/', (req, res) => {
  res.render('home');
});

// Create a route
app.get('*', (req, res) => {
  res.status(404).render('error404');
});

//Listen for connections
app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`)
  console.log(`http://localhost:${process.env.PORT}/places`)
  console.log(`http://localhost:${process.env.PORT}/404test`)
  console.log(`http://localhost:${process.env.PORT}/places/new`)
})