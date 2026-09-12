const express = require("express"); // Set up Express and create the app
const app = express();
app.set("view engine", "ejs"); // Use EJS templates to display the pages
app.use(express.urlencoded({ extended: false })); // Make submitted form fields available in req.body
app.use(express.static("public")); // Serve files from the public folder
const posts = [] // Store posts in memory
let nextPostId = 1; // Track the ID to assign to the next new post

// Display the homepage with the current list of posts.
app.get("/", function (req, res) { 
  res.render("index", {posts: posts});
});

// Find the selected post and display its filled-in edit form
app.get("/posts/:id/edit", function (req, res) {
    const postId = Number(req.params.id);
    const post = posts.find(function (item) {
        return item.id === postId;
    });
    if (post === undefined) {
    res.status(404).send("Post not found");
    return;
}
    res.render("edit", { post: post });
});

// Save the changes submitted through the edit form
app.post("/posts/:id/edit", function (req, res) {
    const postId = Number(req.params.id);
    const post = posts.find(function (item) {
        return item.id === postId;
    });
    if (post === undefined) {
    res.status(404).send("Post not found");
    return;
}
   post.author = req.body.author;
   post.title = req.body.title;
   post.content = req.body.content;
   res.redirect("/");
});

// Remove the selected post and return to the homepage
app.post("/posts/:id/delete", function (req, res) {
    const postId = Number(req.params.id);
    const postIndex = posts.findIndex(function (item) {
        return item.id === postId;
    });
    if (postIndex !== -1) {
    posts.splice(postIndex,1);
}
    res.redirect("/");
});

// Create a new post using the submitted form fields
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

// Start the server on port 3000
app.listen(3000, function () {
  console.log("Server running at http://localhost:3000");
});