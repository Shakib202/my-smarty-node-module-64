const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello my name is Shakib");
});

const users = [
  { id: 1, name: "Sabana", email: "Sabana@gmail.com", phone: "01788888888" },
  {
    id: 2,
    name: "Shabnoor",
    email: "Shabnoor@gmail.com",
    phone: "01788888888",
  },
  {
    id: 3,
    name: "Suchorita",
    email: "Suchorita@gmail.com",
    phone: "01788888888",
  },
  {
    id: 4,
    name: "Suchonda",
    email: "Suchonda@gmail.com",
    phone: "01788888888",
  },
  {
    id: 5,
    name: "Srabonti",
    email: "Srabonti@gmail.com",
    phone: "01788888888",
  },
  { id: 6, name: "Sabila", email: "Sabila@gmail.com", phone: "01788888888" },
  { id: 7, name: "Sohana", email: "Sohana@gmail.com", phone: "01788888888" },
];

// app.get('/users', (req, res) => {
//   res.send(users);
// })

// filter by search query parameter
app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  res.send("finding user");
});

app.post("/user", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.get("/fruits", (req, res) => {
  res.send(["mango", "apple", "oranges"]);
});

app.get("/fruits/mango/fazle", (req, res) => {
  res.send("sour soud fazle flovor");
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
