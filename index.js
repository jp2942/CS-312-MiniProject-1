const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
const posts = []

app.get("/", function (req, res) {
  res.render("index");
});

app.post("/posts", function (req, res) {
    const newPost = {
        author: req.body.author,
        title: req.body.title,
        content: req.body.content,
        createdAt: new Date(),
    };
    posts.push(newPost);
    console.log(posts);
    res.send("Form recieved");
});

app.listen(3000, function () {
  console.log("Server running at http://localhost:3000");
});