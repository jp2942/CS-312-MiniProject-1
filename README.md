# Sedona Travel Blog

Jaden Patel — CS-312 Mini-Project 1

For this project, I built a simple blog about visiting Sedona using Node.js, Express, EJS, and CSS. Users can share travel experiences and suggestions by creating posts. They can also edit or delete posts from the homepage.

## Features

* Create a post with an author, title, and content.
* View all posts and the total number of posts.
* Show when each post was created.
* Edit a post with its current information already filled in.
* Delete posts.
* Use the site on a computer or phone.

## Running the Project

Make sure Node.js and npm are installed. Download or clone this repository, then open a terminal in the project folder.

Install the dependencies:

```bash
npm install
```

Start the server:

```bash
node index.js
```

Open http://localhost:3000 in your browser. Press **Ctrl+C** in the terminal to stop the server.

## Main Files

* `index.js` handles the server and routes.
* `views/index.ejs` contains the homepage and list of posts.
* `views/edit.ejs` contains the edit form.
* `public/styles.css` contains the styling for both pages.

## Post Storage

Posts are stored in an array instead of a database. This means all posts are cleared when the server restarts.

## Testing

I tested creating, editing, and deleting posts. I also checked that empty required fields prevent form submission, line breaks display correctly, and missing posts show a “Post not found” message. I tested the site on my computer and phone.
