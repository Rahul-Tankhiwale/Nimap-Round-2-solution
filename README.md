Project Overview :This project is developed as part of Nimap Infotech – Round 2 (Task-Based Project) selection process.

The application demonstrates: Category Master (CRUD), Product Master (CRUD), Product–Category relationship and implemented Server-side pagination

Technology Stack
Backend : Node.js + Express.js
Frontend (view engine): EJS (Embedded JavaScript Templates)
Database : MySQL
Other Tools & Libraries: mysql2, body-parser, dotenv, nodemon

Project Features

Page 1 : Category Master

1.Add Category
2.View Categories
3.Edit Category
4.Delete Category

Page 2: Product Master

1.Add Product
2.View Products
3.Edit Product
4.Delete Product

Page3: Product–Category Mapping
Each product belongs to a category
Product list displays:
Product ID
Product Name
Category ID
Category Name

Page3: Server-Side Pagination

Pagination is implemented at the database level
Example: Page size = 10, Page 2 → Fetches records 11–20 from DB


How to Install & Run the Project
Step 1: Clone the Repository
git clone https://github.com/Rahul-Tankhiwale/Nimap-Round-2-solution.git

Step 2: Navigate to Project Folder
cd nimap-machine-test

Step 3: Install Dependencies
npm install

Step 4: Setup Database
Create MySQL database and Run the SQL schema provided below

CREATE DATABASE nimap_test;
USE nimap_test;

CREATE TABLE category (
  category_id INT AUTO_INCREMENT PRIMARY KEY,
  category_name VARCHAR(100) NOT NULL
);

CREATE TABLE product (
  product_id INT AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(100),
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES category(category_id)
);

Update .env file with correct DB credentials
Create a .env file in the root directory:
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=nimap_test

Step 5: Run the Application
npm run dev

Step 6: Open in Browser
http://localhost:3000


