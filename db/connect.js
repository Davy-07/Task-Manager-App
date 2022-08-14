const mongoose = require('mongoose');
const db_connect = (uri) =>{

    return mongoose.connect(uri,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}

module.exports = db_connect;




