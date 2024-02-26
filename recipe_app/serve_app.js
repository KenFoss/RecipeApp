const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Route for the Home page
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Route for the Recipes page
app.get('/recipes', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Route for the RecipeInfo page
app.get('/recipe-info/:id', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Route for the MealPlanner page
app.get('/meal-planner', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
