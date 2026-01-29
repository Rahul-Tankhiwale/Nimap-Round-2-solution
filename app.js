const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();
const app = express();


app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

const categoryRoutes = require("./routes/category.routes");
const productRoutes = require("./routes/product.routes");

app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.redirect("/categories");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
