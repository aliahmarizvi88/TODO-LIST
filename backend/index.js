require('dotenv').config();
const express = require('express');
const listRouter = require('./routes/listRouter.js');
const UserRouter = require('./routes/userRouter.js');
const { restrictToLoginUserOnly } = require('./middleware/userMiddleware.js');
const { connectDB } = require('./config/connection.js');
const cors = require('cors');
const cookieParser = require('cookie-parser');

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
app.use(cookieParser());

connectDB();

app.use('/user', UserRouter);
app.use('/', restrictToLoginUserOnly, listRouter);

app.listen(PORT, () => console.log(`APP IS RUNNING ON PORT: ${PORT}`));
