const express = require('express');
const path = require('path');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = express();

// Dev logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Profile route
app.use('/api/v1/profile', require('./routes/profile'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
