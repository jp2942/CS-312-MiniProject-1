const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
const posts = []
let nextPostId = 1;

app.get("/", function (req, res) {
  res.render("index", {posts: posts});
});

app.get("/posts/:id/edit", function (req, res) {
    const postId = Number(req.params.id);
    const post = posts.find(function (item) {
        return item.id === postId;
    });
    res.render("edit", { post: post });
});

app.post("/posts/:id/edit", function (req, res) {
    const postId = Number(req.params.id);
    const post = posts.find(function (item) {
        return item.id === postId;
    });
   post.author = req.body.author;
   post.title = req.body.title;
   post.content = req.body.content;
   res.redirect("/");
});

app.post("/posts", function (req, res) {
    const newPost = {
        author: req.body.author,
        title: req.body.title,
        content: req.body.content,
        createdAt: new Date(),
        id: nextPostId,
    };
    posts.push(newPost);
    nextPostId = nextPostId + 1;
    console.log(posts);
    res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server running at http://localhost:3000");
});