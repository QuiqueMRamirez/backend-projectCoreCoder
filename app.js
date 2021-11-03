const express = require('express');
const app = express();
const cors = require('cors')({origin: true});

const { server } = require('./src/config/config');

app.use(cors);

app.use(express.json());

app.listen(server.port, () => {
  console.log(`Server running on port: ${server.port}`);
});