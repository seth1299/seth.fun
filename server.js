const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' or root directory
app.use(express.static(path.join(__dirname, 'public'))); // Adjust to 'public' or the folder where your files are

// Send index.html for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Adjust the path as needed
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
