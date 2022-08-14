const db_connect = require('./db/connect');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
require('dotenv').config();


app.use(express.json());
app.use('/api/v1/tasks',tasks);

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
