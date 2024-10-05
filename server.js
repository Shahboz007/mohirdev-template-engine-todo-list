const express = require("express");
const dotenv = require("dotenv");
const app = express();
const path = require("path");

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extends: false }));

// Public folder
app.use(express.static(path.join(__dirname, "public")));

// Initialize template engine
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/", require("./routes/main.route"));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
