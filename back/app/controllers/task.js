const { Task } = require('../models');

const taskController = {

    listTasks: async function (req, res) {
        // Récupérer la liste des taches
        try {
            const tasks = await Task.findAll();
                    
        // Renvoyer la liste des taches en json
            res.status(200).json(tasks);
        }catch (error){
            res.status(500).json({ message: 'An unexpected error occured...'});
        }

    },

    createOneTask: async function (req, res) {
        try{
            
            const { name } = req.body;    
      
            const task = {};
      
            if (name === undefined || name === ""){
              return res.status(400).json({ message: 'name is mandatory'});
            }
      
            task.name = name;    
      
            const newTask = await Task.create(task);
      
            res.status(201).json(newTask);
      
          }catch (error){
            res.status(500).json({ message: 'An unexpected error occured...'});
          }  

    },

    updateOneTask: async function (req, res) {
        try{
            
            const taskId = req.params.id;
            const task = await Task.findByPk(taskId);
      
            if (!task){
              return res.status(404).json({ message: `Task with id ${taskId} not found.`});
            }
      
            const { name } = req.body;    
      
            if (name !== undefined && name === ""){
              return res.status(400).json({ message: 'Name should not be an empty string.'});
            }
      
            if (name){
              task.name = name;
            }
      
            await task.save();
      
            res.status(200).json(task);
      
          }catch (error){
            res.status(500).json({ message: 'An unexpected error occured...'});
          }

    },

    deleteOneTask: async function (req, res) {
        try{
            const taskId = req.params.id;
            const task = await Task.findByPk(taskId);
      
            if (!task){
              return res.status(404).json({ message: `Task with id ${taskId} not found.`});
            }
      
            await task.destroy();
      
            res.status(204).json();
      
          }catch (error){
            res.status(500).json({ message: 'An unexpected error occured...'});
          }   

    }
};

module.exports = taskController;
