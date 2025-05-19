import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
const blogs = [];

app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.get("/blogs", (req, res) => {
    res.render('blogs.ejs', { blogs: blogs });
})

app.get("/new-blog", (req, res) => {
    res.render('index.ejs');
})

app.get("/blogs/:title-:name", (req, res) => {
    const { title, name } = req.params;

    const blog = blogs.find(b =>
        b.title === title &&
        b.name === name.trim()
    );

    if (blog) {
        res.render("blog.ejs", { blog });
    } else {
        res.status(404).send("Blog not found");
    }
});

app.post("/submit", (req, res) => {
    const blog = {
        name: req.body.name,
        title: req.body["blog-name"],
        text: req.body["blog-text"]
    }
    blogs.push(blog);
    res.redirect('/blogs');
})

app.post("/blogs/:title-:name/edit", (req, res) => {
    const oldTitle = req.params.title;
    const oldName = req.params.name;

    const { title, name, text } = req.body;

    const blog = blogs.find(b => b.title === oldTitle && b.name === oldName);

    if (blog) {
        blog.title = title;
        blog.name = name;
        blog.text = text;
        res.sendStatus(200);
    } else {
        res.status(404).send("Blog not found");
    }
});

app.post("/blogs/:title-:name/delete", (req, res) => {
    const { title, name } = req.params;
    const index = blogs.findIndex(b => b.title === title && b.name === name);

    if (index !== -1) {
        blogs.splice(index, 1);
        res.sendStatus(200);
    } else {
        res.status(404).send("Blog not found");
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
