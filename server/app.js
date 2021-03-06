const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const middlewares = require('./middelwares/middlewares');

const logs = require('./api/logs');

require('dotenv').config();

mongoose.connect(process.env.ATLAS_DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World',
  });
});

app.use('/api/logs', logs);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App listening on port ${port}`));
