
require('dotenv').config();

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());


app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", message: "Service is healthy", uptime: process.uptime() });
});

app.get('/', (req, res) => {
    console.log("Github Action CI/CD for Node.js Application is working fine! 123456");
    res.send("Github Action CI/CD for Node.js Application is working fine! thanks for watching this video! 123456");
});

app.get('/about', (req, res) => {
    console.log("About page is working fine!");
    res.send("About page is working fine! New data will be added soon!");
});

app.get('/home', (req, res) => {
    console.log("Home page is working fine!");
    res.send("Home page is working fine .more data will be added soon!");
});

app.get('/gallery', (req, res) => {
    console.log("Gallery page is working fine!");
    res.send("Gallery page is working fine .more data will be added soon!");
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on PORT: ${PORT}`);
});

