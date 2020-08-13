const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
var path = require('path');
const app = express();
const port = 9000;

// Where we will keep books
let books = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/book', (req, res) => {
    // We will be coding here
});

app.get('/', function(request, response){
    
 response.sendFile(path.join(__dirname + '/index.html'));



});




app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));