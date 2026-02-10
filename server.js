const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));

let groceries = [
  { id: 1, name: "Rice (1kg)", price: 60 },
  { id: 2, name: "Milk (1L)", price: 50 },
  { id: 3, name: "Bread", price: 40 },
  { id: 4, name: "Eggs (12)", price: 90 },
  { id: 5, name: "Sugar (1kg)", price: 45 }
];

app.get("/groceries", (req, res) => {
  res.json(groceries);
});

app.post("/order", (req, res) => {
  console.log("New Order:", req.body);
  res.json({ message: "Order placed successfully!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
