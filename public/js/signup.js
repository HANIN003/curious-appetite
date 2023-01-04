const { application } = require("express");

const signupFormHandler = async (event) => {
  event.preventDefault();
  // const signupForm = document.querySelector("#signup-form");
  const name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (name && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

app.get("/", (req, res) => {
  res.render("signup.handlebars");
});


// Path: routes/api/user-routes.js  
app.route("../layouts/partials/signup").post((req, res) => {
  User.create({
    name: req.body.name,
    password: req.body.password,
  })
    .then((dbUserData) => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.name = dbUserData.name;
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});



document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);