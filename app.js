const port = process.env.PORT || 5000;

const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const blogRouter = require('./src/routers/blog_router');
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './src/views'));

app.use('/', blogRouter);
app.use('/blog', blogRouter);
app.listen(port, () => {
  console.log(`Server Running in port:${port}`);
});
