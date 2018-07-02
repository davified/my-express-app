const express = require("express");
const PORT = 3000;

const app = express();
app.use(express.json());

let books = [
  {
    id: 1,
    title: "harry potter",
    summary: "someone dies"
  },
  {
    id: 2,
    title: "Game of Thrones",
    summary: "everyone dies"
  }
];

app.get("/", (req, res) => {
  res.send("hello world!");
});

// GET /books
app.get("/books", (req, res) => {
  console.log(req);
  res.send(books);
});

// GET /books/:id
app.get("/books/:id", (req, res) => {
  console.log(req.params);
  const requestedBook = books.find(book => {
    return book.id == req.params.id;
  });
  res.send(requestedBook);
});

// POST /books
app.post("/books", (req, res) => {
  console.log(req.body);
  books = [...books, req.body];
  res.send(books);
});

const pizzas = [
  { id: "1", name: "hawaiian pizza", price: 20 },
  { id: "2", name: "vege pizza", price: 25 }
];

app.put("/pizzas/:id", (req, res) => {
  res.send(pizzas);
});

app.listen(PORT, () => {
  console.log(`your app has started on port ${PORT}...`);
});
