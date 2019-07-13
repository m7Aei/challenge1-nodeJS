const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
  watch: true
});

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "njk");

const users = [];
const ages = [];

app.get("/", (req, res) => {
  return res.render("new");
});

app.post("/check", (req, res) => {
  const age = req.body.age;

  if (req.body.age >= 18) {
    return res.redirect(`/major?age=${age}`);
  } else {
    return res.redirect(`/minor?age=${age}`);
  }

  console.log(users);
  console.log(ages);
});

app.get("/major", (req, res) => {
  const { age } = req.query;

  return res.render("major", { age });
});

app.get("/minor", (req, res) => {
  const { age } = req.query;

  return res.render("minor", { age });
});

app.listen(3000);
