const db = require("../config/db");

// GET all categories
exports.getCategories = (req, res) => {
  db.query("SELECT * FROM category", (err, results) => {
    if (err) throw err;
    res.render("categories", { categories: results });
  });
};

// ADD a new category
exports.addCategory = (req, res) => {
  const { category_name } = req.body;
  db.query(
    "INSERT INTO category (category_name) VALUES (?)",
    [category_name],
    (err) => {
      if (err) throw err;
      res.redirect("/categories");
    }
  );
};

// DELETE a category
exports.deleteCategory = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM category WHERE category_id = ?", [id], (err) => {
    if (err) throw err;
    res.redirect("/categories");
  });
};

// GET category by ID (for edit)
exports.getCategoryById = (req, res) => {
  const { id } = req.params;
  db.query(
    "SELECT * FROM category WHERE category_id = ?",
    [id],
    (err, result) => {
      if (err) throw err;
      res.render("edit-category", { category: result[0] });
    }
  );
};

// UPDATE category
exports.updateCategory = (req, res) => {
  const { id } = req.params;
  const { category_name } = req.body;
  db.query(
    "UPDATE category SET category_name = ? WHERE category_id = ?",
    [category_name, id],
    (err) => {
      if (err) throw err;
      res.redirect("/categories");
    }
  );
};
