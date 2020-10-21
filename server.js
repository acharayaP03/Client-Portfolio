const express = require('express');

const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;
/**
 * @static files
 * @class
 * @js
 * @Images will be delivered via express static middleware.
 */

app.use(express.static(path.join(__dirname, './static')));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, './static/index.html'));
});

app.get('/portfolio-details', (request, response) => {
  response.sendFile(path.join(__dirname, './static/portfolio-details.html'));
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
