require('dotenv').config();
const express = require('express');
const listRouter = require('./routes/listRouter.js');
const { connectDB } = require('./config/connection.js');
const cors = require('cors');

const PORT = process.env.PORT;
const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

app.use('/', listRouter);

app.listen(PORT, () => console.log(`APP IS RUNNING ON PORT: ${5000}`));
