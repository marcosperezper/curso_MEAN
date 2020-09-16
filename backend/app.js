const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added sucessfully'
  });
});

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: 'fahqwe12',
      title: 'First serve-side post',
      content: 'This is coming from the server'
    },
    {
      id: 'rdtyuio12134',
      title: 'Second serve-side post',
      content: 'Hi Im coming from the server too'
    }
  ];
  res.status(200).json({
    message: 'Success',
    posts: posts
  });
});

module.exports = app;
