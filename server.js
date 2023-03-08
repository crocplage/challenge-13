const express = require('express');
const routes = require('./routes');


const app = express();
const PORT = process.env.PORT || 5080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});