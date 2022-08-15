const Task = require('../models/tasks')
const getAllTasks = async(req,res) =>{
    try{
        const task = await Task.find({});
        res.status(200).json({task});
    }
    catch(error){
        res.status(500).json({msg: error});
    }
}

const createTask = async (req, res) =>{
    try{
        const task = await Task.create(req.body);
        res.status(201).json({task});
    }
    catch(error){
        res.status(500).json({msg:error});
    }
    
}

const getSigleTask = async(req, res) =>{
    try{
        const {id} = req.params;
        const task = await Task.findOne({_id:id});
        if(!task){
            return res.status(404).json({msg: 'Task not found'});
        }
        res.status(200).json({task});
    }
    catch(error){
        res.status(500).json({msg: error});
    }
}

const updateTask = async (req, res) =>{
    try{
        const {id} = req.params;
        const data = req.body;
        const task = await Task.findOneAndUpdate({_id:id},data,{
            new: true,
            runValidators: true
        })
        if(!task){
            return res.status(404).json({msg: 'Task not found'});
        }
        res.status(201).json({task});
    }
    catch(error){
        res.status(500).json({msg: error});
    }
}

const deleteTask = async (req, res) =>{ 
    try{
        const{id} = req.params;
        const task = await Task.findOneAndDelete({_id:id});
        if(!task){
            return res.status(404).json({msg: 'Tasks not found'});
        }
        res.status(200).json({task});
    }
    catch(error){
        res.status(500).json({msg: error});
    }
}

module.exports = {getAllTasks,createTask,getSigleTask,updateTask,deleteTask};

