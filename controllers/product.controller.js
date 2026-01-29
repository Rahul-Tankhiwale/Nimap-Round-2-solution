const db = require("../config/db");

// GET all products (with pagination)
exports.getProducts = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = 10;
  const offset = (page - 1) * pageSize;

  const query = `
    SELECT p.product_id, p.product_name, c.category_id, c.category_name
    FROM product p
    JOIN category c ON p.category_id = c.category_id
    LIMIT ?, ?
  `;

  db.query(query, [offset, pageSize], (err, results) => {
    if (err) throw err;
    res.render("products", { products: results, page });
  });
};

// GET Add Product page
exports.getAddProduct = (req, res) => {
  db.query("SELECT * FROM category", (err, categories) => {
    if (err) throw err;
    res.render("add-product", { categories });
  });
};

// ADD product
exports.addProduct = (req, res) => {
  const { product_name, category_id } = req.body;
  db.query(
    "INSERT INTO product (product_name, category_id) VALUES (?, ?)",
    [product_name, category_id],
    (err) => {
      if (err) throw err;
      res.redirect("/products");
    }
  );
};

// DELETE product
exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM product WHERE product_id = ?", [id], (err) => {
    if (err) throw err;
    res.redirect("/products");
  });
};

// GET Product by ID (for edit)
exports.getProductById = (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM product WHERE product_id = ?", [id], (err, product) => {
    if (err) throw err;
    db.query("SELECT * FROM category", (err, categories) => {
      if (err) throw err;
      res.render("edit-product", { product: product[0], categories });
    });
  });
};

// UPDATE product
exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const { product_name, category_id } = req.body;
  db.query(
    "UPDATE product SET product_name = ?, category_id = ? WHERE product_id = ?",
    [product_name, category_id, id],
    (err) => {
      if (err) throw err;
      res.redirect("/products");
    }
  );
};
