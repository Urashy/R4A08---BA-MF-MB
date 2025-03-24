        const API_URL = 'http://localhost:3001/api';

        const todoList = document.querySelector('.todo-list');
        const didList = document.querySelector('.did-list');
        const newTodoInput = document.getElementById('new-todo');
        const newDateInput = document.getElementById('new-date');
        const addTodoBtn = document.getElementById('add-todo-btn');
        const clearCompletedBtn = document.getElementById('clear-completed-btn');
        const themeToggleBtn = document.getElementById('theme-toggle');

        let isLoading = false;
        let tasks = [];


        document.addEventListener('DOMContentLoaded', () => {
            fetchTasks();
            setMinDate();
            loadTheme();
            

            const today = new Date().toISOString().split('T')[0];
            newDateInput.value = today;
            

            themeToggleBtn.addEventListener('click', toggleTheme);
            addTodoBtn.addEventListener('click', () => {
                const title = newTodoInput.value.trim();
                const datefin = newDateInput.value ? new Date(newDateInput.value).toISOString() : null;
                addTask(title, datefin);
            });
            newTodoInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') addTodoBtn.click();
            });
            clearCompletedBtn.addEventListener('click', clearCompletedTasks);
        });


        function setMinDate() {
            const today = new Date().toISOString().split('T')[0];
            newDateInput.min = today;
        }


        function loadTheme() {
            const darkMode = localStorage.getItem('darkMode') === 'true';
            if (darkMode) {
                document.body.classList.add('dark-theme');
                themeToggleBtn.innerHTML = '<span class="icon">☀️</span> Mode clair';
            }
        }


        function toggleTheme() {
            const isDarkMode = document.body.classList.toggle('dark-theme');
            localStorage.setItem('darkMode', isDarkMode);
            
            if (isDarkMode) {
                themeToggleBtn.innerHTML = '<span class="icon">☀️</span> Mode clair';
            } else {
                themeToggleBtn.innerHTML = '<span class="icon">🌙</span> Mode sombre';
            }
        }

        async function fetchTasks() {
            setLoading(true);
            try {
                const response = await fetch(`${API_URL}/tasks`);
                if (!response.ok) throw new Error('Erreur lors de la récupération des tâches');
                tasks = await response.json();
                renderTasks(tasks);
            } catch (error) {
                console.error('Erreur:', error);
                showErrorMessage('Impossible de charger les tâches');
            } finally {
                setLoading(false);
            }
        }


async function addTask(title, datefin) {
    if (!title) {
        showErrorMessage('Veuillez saisir un titre pour la tâche');
        return;
    }
    
    setLoading(true);
    try {
        const response = await fetch(`${API_URL}/tasks`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, datefin })
        });

        if (!response.ok) throw new Error('Erreur lors de l\'ajout de la tâche');


        await fetchTasks(); 
        

        
        newTodoInput.value = '';
        const today = new Date().toISOString().split('T')[0];
        newDateInput.value = today;
    } catch (error) {
        console.error('Erreur:', error);
        showErrorMessage('Impossible d\'ajouter la tâche');
    } finally {
        setLoading(false);
    }
}
        function formatDate(dateStr) {
            if (!dateStr) return 'Pas de date';
            
            const date = new Date(dateStr);
            
            if (isNaN(date.getTime())) {
                return 'Date invalide';
            }
            
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            
            const nextWeek = new Date(today);
            nextWeek.setDate(nextWeek.getDate() + 7);
            
            if (date.getTime() === today.getTime()) {
                return 'Aujourd\'hui';
            } else if (date.getTime() === tomorrow.getTime()) {
                return 'Demain';
            } else if (date < nextWeek) {
                const options = { weekday: 'long' };
                return date.toLocaleDateString('fr-FR', options);
            } else {
                return date.toLocaleDateString('fr-FR');
            }
        }


        function getDaysRemaining(dateStr) {
            if (!dateStr) return null;
            
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            const date = new Date(dateStr);
            date.setHours(0, 0, 0, 0);
            
            const diffTime = date - today;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            return diffDays;
        }


        function getPriorityClass(dateStr) {
            if (!dateStr) return '';
            
            const daysRemaining = getDaysRemaining(dateStr);
            
            if (daysRemaining < 0) {
                return 'priority-overdue';
            } else if (daysRemaining === 0) {
                return 'priority-today';
            } else if (daysRemaining <= 2) {
                return 'priority-high';
            } else if (daysRemaining <= 7) {
                return 'priority-medium';
            } else {
                return 'priority-low';
            }
        }


        function renderTasks(tasks) {
            todoList.innerHTML = '';
            didList.innerHTML = '';
            
            const todoItems = tasks.filter(task => !task.completed);
            const completedItems = tasks.filter(task => task.completed);
            
            document.getElementById('todo-count').textContent = todoItems.length;
            document.getElementById('completed-count').textContent = completedItems.length;

            if (tasks.length === 0) {
                const emptyMessage = document.createElement('div');
                emptyMessage.className = 'empty-message';
                emptyMessage.textContent = 'Aucune tâche pour le moment';
                todoList.appendChild(emptyMessage);
                return;
            }

            if (todoItems.length === 0) {
                const emptyMessage = document.createElement('div');
                emptyMessage.className = 'empty-message';
                emptyMessage.textContent = 'Toutes les tâches sont terminées !';
                todoList.appendChild(emptyMessage);
            } else {
                todoItems.forEach(task => addTaskToDOM(task));
            }
            
            if (completedItems.length === 0) {
                const emptyMessage = document.createElement('div');
                emptyMessage.className = 'empty-message';
                emptyMessage.textContent = 'Aucune tâche terminée';
                didList.appendChild(emptyMessage);
            } else {
                completedItems.forEach(task => addTaskToDOM(task));
            }
            
            clearCompletedBtn.style.display = completedItems.length > 0 ? 'block' : 'none';
        }


        function addTaskToDOM(task) {
            const li = document.createElement('li');
            li.classList.add(task.completed ? 'did-item' : 'todo-item');
            li.dataset.id = task.id;
            
            const priorityClass = getPriorityClass(task.datefin);
            if (priorityClass && !task.completed) {
                li.classList.add(priorityClass);
            }

            const formattedDate = formatDate(task.datefin);
            const daysRemaining = getDaysRemaining(task.datefin);
            
            let dateInfo = formattedDate;
            if (!task.completed && daysRemaining !== null) {
                if (daysRemaining < 0) {
                    dateInfo += ` <span class="days-remaining overdue">(En retard de ${Math.abs(daysRemaining)} jour${Math.abs(daysRemaining) > 1 ? 's' : ''})</span>`;
                } else if (daysRemaining === 0) {
                    dateInfo += ' <span class="days-remaining today">(Aujourd\'hui)</span>';
                } else {
                    dateInfo += ` <span class="days-remaining">(Dans ${daysRemaining} jour${daysRemaining > 1 ? 's' : ''})</span>`;
                }
            }

            li.innerHTML = `
                <div class="task-content">
                    <span class="todo-title">${task.title}</span>
                    <small class="task-date">📅 ${dateInfo}</small>
                </div>
                <div class="task-actions">
                    ${task.completed ? 
                        `<button class="action-btn restore-btn" title="Restaurer">↩</button>` : 
                        `<button class="action-btn complete-btn" title="Marquer comme terminé">✓</button>`}
                    <button class="action-btn delete-btn" title="Supprimer">×</button>
                </div>
            `;

            if (task.completed) {
                didList.appendChild(li);
                li.querySelector('.restore-btn').addEventListener('click', () => restoreTask(task.id));
            } else {
                todoList.appendChild(li);
                li.querySelector('.complete-btn').addEventListener('click', () => completeTask(task.id));
            }
            
            li.querySelector('.delete-btn').addEventListener('click', () => deleteTask(task.id));
            
            setTimeout(() => {
                li.classList.add('fade-in');
            }, 10);
        }


        async function completeTask(id) {
            setLoading(true);
            try {
                const response = await fetch(`${API_URL}/tasks/${id}`, {
                    method: 'PUT'
                });
                
                if (!response.ok) throw new Error('Erreur lors de la mise à jour de la tâche');
                
                const updatedTask = await response.json();
                
                const index = tasks.findIndex(task => task.id === id);
                if (index !== -1) {
                    tasks[index] = updatedTask;
                }
                
                const taskElement = document.querySelector(`li[data-id="${id}"]`);
                if (taskElement) {
                    taskElement.classList.add('completing');
                    setTimeout(() => {
                        renderTasks(tasks);
                    }, 300);
                } else {
                    renderTasks(tasks);
                }
            } catch (error) {
                console.error('Erreur:', error);
                showErrorMessage('Impossible de marquer la tâche comme terminée');
            } finally {
                setLoading(false);
            }
        }


        async function restoreTask(id) {
            setLoading(true);
            try {
                const response = await fetch(`${API_URL}/tasks/${id}/restore`, {
                    method: 'PUT'
                });
                
                if (!response.ok) throw new Error('Erreur lors de la restauration de la tâche');
                
                const updatedTask = await response.json();
                
                const index = tasks.findIndex(task => task.id === id);
                if (index !== -1) {
                    tasks[index] = updatedTask;
                }
                
                renderTasks(tasks);
            } catch (error) {
                console.error('Erreur:', error);
                showErrorMessage('Impossible de restaurer la tâche');
            } finally {
                setLoading(false);
            }
        }


        async function deleteTask(id) {
            if (!confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
                return;
            }
            
            setLoading(true);
            try {
                const response = await fetch(`${API_URL}/tasks/${id}`, {
                    method: 'DELETE'
                });
                
                if (!response.ok) throw new Error('Erreur lors de la suppression de la tâche');
                
                tasks = tasks.filter(task => task.id !== id);
                
                const taskElement = document.querySelector(`li[data-id="${id}"]`);
                if (taskElement) {
                    taskElement.classList.add('removing');
                    setTimeout(() => {
                        renderTasks(tasks);
                    }, 300);
                } else {
                    renderTasks(tasks);
                }
            } catch (error) {
                console.error('Erreur:', error);
                showErrorMessage('Impossible de supprimer la tâche');
            } finally {
                setLoading(false);
            }
        }


        async function clearCompletedTasks() {
            if (!confirm('Êtes-vous sûr de vouloir supprimer toutes les tâches terminées ?')) {
                return;
            }
            
            setLoading(true);
            try {
                const completedIds = tasks.filter(task => task.completed).map(task => task.id);
                
                const promises = completedIds.map(id => 
                    fetch(`${API_URL}/tasks/${id}`, { method: 'DELETE' })
                );
                
                await Promise.all(promises);
                
                tasks = tasks.filter(task => !task.completed);
                
                renderTasks(tasks);
            } catch (error) {
                console.error('Erreur:', error);
                showErrorMessage('Impossible de supprimer les tâches terminées');
            } finally {
                setLoading(false);
            }
        }


        function showErrorMessage(message) {
            alert(message);
        }


        function setLoading(loading) {
            isLoading = loading;

        }