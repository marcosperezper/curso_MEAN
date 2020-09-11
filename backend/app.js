const express = require('express');

const app = express();

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
