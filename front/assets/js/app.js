const app = {
    init: async function () {

        // On charge la liste des tâches depuis l'API
        await taskManager.fetchAndInsertTasksFromApi();

        // On écoute la soumission du formulaire d'ajout
        document.querySelector('.create-task').addEventListener('submit', taskManager.handleCreateForm);

    }

};

document.addEventListener('DOMContentLoaded', app.init);
