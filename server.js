const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const path = require("path");
const session = require("express-session");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");
const bodyParser = require("body-parser");

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

//Handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//Sessions
const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 3000000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

// What is this doing?
// app.use((req, res, next) => {
//   if (!req.session.user_id) {
//     res.redirect("/login");
//   } else {
//     next();
//   }
// });

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Now listening on http://localhost:${PORT}`)
  );
});
