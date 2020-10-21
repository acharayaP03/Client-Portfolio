const express = require('express');

const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

/**
 * @TemplateEnding Ejs
 * @appSet
 * @Setting up a template engine, no need to require it, Express will automatically discovere it.
 * @Views folder: Expects all the views to be on ./views folder
 */

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
/**
 * @static files
 * @class
 * @js
 * @Images will be delivered via express static middleware.
 */

app.use(express.static(path.join(__dirname, './static')));

app.get('/', (request, response) => {
  response.render('pages/index', { pageTitle: 'Shaf Chowdary'});
});

app.get('/portfolio-details', (request, response) => {
  response.sendFile(path.join(__dirname, './static/portfolio-details.html'));
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
