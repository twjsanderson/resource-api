const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const routes = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', routes);


app.listen(port = 8000, () => {
    console.log(`app listening on port ${port}`)
});

module.exports = app;
