const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

//Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//Sessions
app.use(session({ secret : 'secret' , resave : false , saveUninitialized : true , store : new SequelizeStore({ db : sequelize }) }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

//Auth, API and HTML routes
// app.use(authRoutes);
// app.use(apiRoutes);
// app.use(htmlRoutes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
}
);

 module .exports = app;