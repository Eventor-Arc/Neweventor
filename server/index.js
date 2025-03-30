require("dotenv").config();
const express = require("express");
const { connectToMongoDB } = require("./database");
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const router = require("./routes");
app.use("/api", router);

app.use('/api/auth', require('./routes/auth'));

app.use(express.static(path.join(__dirname, 'build')));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
}); 

const port = process.env.PORT || 5000;

const startServer = async () => {
    await connectToMongoDB();
    app.listen(port, () => {
        console.log(`Server is listening on http://localhost:${port}`);
    });
};
startServer();