const express = require('express');
const app = express();
const cors = require('cors');
const connectdb = require('./database/db')
connectdb();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(cors());


app.use('/user', require('./users/user.controller.js'))

const port = process.env.NODE_ENV || 3000;
 app.listen(port, function () {
    console.log('Server listening on port ' + port);
});