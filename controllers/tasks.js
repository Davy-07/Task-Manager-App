
const getAllTasks = (req,res) =>{
    res.send('All items are listed here');
}

const createTask = (req, res) =>{
    res.send('Task created');
}

const getSigleTask = (req, res) =>{
    res.send('Single Tasks');
}

const updateTask = (req, res) =>{
    res.send('Task updated');
}

const deleteTask = (req, res) =>{ 
    res.send('Task deleted');
}

module.exports = {getAllTasks,createTask,getSigleTask,updateTask,deleteTask};

