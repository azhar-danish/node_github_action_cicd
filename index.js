
require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());


app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Service is healthy", uptime: process.uptime() });
});

app.get('/', (req, res) => {
    console.log("Github Action CI/CD for Node.js Application is working fine! 123");
    res.send("Github Action CI/CD for Node.js Application is working fine!");
});

app.get('/about', (req, res) => {
    console.log("About page is working fine!");
    res.send("About page is working fine!");
});


app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on PORT: ${PORT}`);
});

