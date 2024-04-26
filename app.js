require('dotenv').config();
const path = require('path'); //For Static Serve
const express = require("express");
require("colors"); //For Change Color
const bodyParser = require('body-parser');






const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

app.use('', (_, res, next) => {
    res.set('Cross-Origin-Resource-Policy', 'cross-origin');
    next();
});

app.use(
    cors({
        origin: process.env.CLIENT_URL,
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);

app
    .get('/', (req, res) => {
        res.send('server is running..')
    })
    .listen(process.env.SERVER_PORT || 3603, () => {
        console.log("successfully connected to the server..")
        console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.SERVER_PORT || 3602}`.yellow.bold);
    })