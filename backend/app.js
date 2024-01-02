// const path = require('path');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');

const app = express();

const userRoutes = require('./routes/user');

app.use(cors());
app.use(bodyParser.json({ extended: false }));

app.use('/users', userRoutes);

app.use(errorController.get404);

sequelize
.sync()
.then(result => {
    app.listen(3000);
})
.catch(err => console.log(err));


