$(document).ready(function () {
  let user = $.get("/api/userData").then(function (data) {
    console.log("user.email: ", data.email);
    console.log("user.name: ", data.name);
    return data;
  });
});
