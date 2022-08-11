const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

app.use(express.json());

app.use('/api/v1/tasks',tasks);


app.listen(5000,console.log('Server listening on port 5000'));