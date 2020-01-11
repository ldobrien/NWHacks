const express = require('express');
const app = express();
const server = require('http').Server(app);
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/api/preop', (req, res) => {

});

app.get('/api/postop', (req,res) => {

})

app.get('/api/personal', (req, res) => {
});


server.listen(PORT, () => {
    console.log('Listening on ' + server)
});