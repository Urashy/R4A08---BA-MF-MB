
const API_URL = 'http://localhost:3003/api';

// Éléments DOM
const todoList = document.querySelector('.todo-list');
const didList = document.querySelector('.did-list');
const newTodoInput = document.getElementById('new-todo');
const addTodoBtn = document.getElementById('add-todo-btn');

// État de chargement initial
let isLoading = false;

// Fonctions pour interagir avec l'API
async function fetchTasks() {
    setLoading(true);
    try {
        const response = await fetch(`${API_URL}/tasks`);
        
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des tâches');
        }
        
        const tasks = await response.json();
        renderTasks(tasks);
    } catch (error) {
        console.error('Erreur:', error);
        showError('Impossible de charger les tâches' );
    } finally {
        setLoading(false);
    }
}

async function addTask(title) {
    setLoading(true);
    try {
        const response = await fetch(`${API_URL}/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title })
        });
        
        if (!response.ok) {
            throw new Error('Erreur lors de l\'ajout de la tâche');
        }
        
        const newTask = await response.json();
        addTaskToDOM(newTask);
        newTodoInput.value = '';
    } catch (error) {
        console.error('Erreur:', error);
        showError('Impossible d\'ajouter la tâche');
    } finally {
        setLoading(false);
    }
}

async function completeTask(id) {
    setLoading(true);
    try {
        const response = await fetch(`${API_URL}/tasks/${id}/complete`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error('Erreur lors de la mise à jour de la tâche');
        }
        
        await fetchTasks(); // Recharger toutes les tâches pour mettre à jour l'UI
    } catch (error) {
        console.error('Erreur:', error);
        showError('Impossible de mettre à jour la tâche');
    } finally {
        setLoading(false);
    }
}

async function deleteTask(id) {
    setLoading(true);
    try {
        const response = await fetch(`${API_URL}/tasks/${id}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) {
            throw new Error('Erreur lors de la suppression de la tâche');
        }
        
        await fetchTasks(); // Recharger toutes les tâches pour mettre à jour l'UI
    } catch (error) {
        console.error('Erreur:', error);
        showError('Impossible de supprimer la tâche');
    } finally {
        setLoading(false);
    }
}

// Fonctions de rendu de l'interface
function renderTasks(tasks) {
    // Vider les listes actuelles
    todoList.innerHTML = '';
    didList.innerHTML = '';
    
    tasks.forEach(task => {
        addTaskToDOM(task);
    });
}

function addTaskToDOM(task) {
    const li = document.createElement('li');
    li.classList.add(task.completed ? 'did-item' : 'todo-item');
    li.dataset.id = task.id;
    
    li.innerHTML = `
        <span class="todo-title">${task.title}</span>
        ${task.completed 
            ? ''
            : `<button class="action-btn complete-btn">✓</button>`
        }
        <button class="action-btn delete-btn">×</button>
    `;
    
    if (task.completed) {
        didList.appendChild(li);
    } else {
        todoList.appendChild(li);
    }
    
    // Ajouter les event listeners aux boutons
    if (!task.completed) {
        li.querySelector('.complete-btn').addEventListener('click', () => {
            completeTask(task.id);
        });
    }
    
    li.querySelector('.delete-btn').addEventListener('click', () => {
        deleteTask(task.id);
    });
}

function setLoading(loading) {
    isLoading = loading;
    addTodoBtn.disabled = loading;
    
    if (loading) {
        const loadingEl = document.createElement('div');
        loadingEl.className = 'loading';
        loadingEl.textContent = 'Chargement...';
        
        todoList.parentNode.insertBefore(loadingEl, todoList);
    } else {
        const loadingEl = document.querySelector('.loading');
        if (loadingEl) {
            loadingEl.remove();
        }
    }
}

function showError(message) {
    alert(message);
}

// Event listeners
addTodoBtn.addEventListener('click', () => {
    const title = newTodoInput.value.trim();
    if (title) {
        addTask(title);
    }
});

newTodoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const title = newTodoInput.value.trim();
        if (title) {
            addTask(title);
        }
    }
});


document.addEventListener('DOMContentLoaded', () => {
    fetchTasks();
});