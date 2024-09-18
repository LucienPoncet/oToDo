const express = require('express');
const router = express.Router();
const taskController = require('./controllers/task');

// Route pour la liste des taches
router.get('/tasks', taskController.listTasks);

// Route pour ajouter une tache
router.post('/tasks', taskController.createOneTask);

// Route pour modifier une tache
router.patch('/tasks/:id', taskController.updateOneTask);

// Route pour supprimer une tache
router.delete('/tasks/:id', taskController.deleteOneTask);

module.exports = router;
