const db_connect = require('./db/connect');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const not_found = require('./middleware/not-found');
require('dotenv').config();

app.use(express.static('./public'));
app.use(express.json());
app.use('/api/v1/tasks',tasks);
app.use(not_found);
const connect = async() =>{
    try
    {
        await db_connect(process.env.db_connect);
        app.listen(5000,console.log('Server listening on port 5000'));
    }
    catch(err){
        console.log(err);
    }
}

connect();
