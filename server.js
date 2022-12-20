const express = require('express');
const app = express();
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const path = require('path');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const hbs = exphbs.create({ helpers });
const db = require('./models');


const PORT = process.env.PORT || 3001;
//Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
//Sessions
app.use(session({ secret : 'secret' , resave : false , saveUninitialized : true , store : new SequelizeStore({ db : sequelize }) }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
//Auth, API and HTML routes
app.use(authRoutes);
app.use(apiRoutes);
app.use(htmlRoutes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
}
);
module .exports = app;