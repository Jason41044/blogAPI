const axios = require("axios");

exports.findAll = (req, res) => {
  // Call the jsonplaceholder API to get a list of blog posts
  axios.get("https://jsonplaceholder.typicode.com/todos").then((apicall) => {
    res.send(apicall.data);
  });
};

exports.findByID = (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos/" + req.params.id)
    .then((apicall) => {
      res.send(apicall.data);
    });
};
