const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(json());

app.use(routes());

app.get('/', (req, res) => {
  res.send('hello');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
