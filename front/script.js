function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        updateThemeToggleText();
    }
}

function toggleTheme() {
    const isDarkTheme = document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    updateThemeToggleText();
}

function updateThemeToggleText() {
    const themeToggle = document.getElementById('theme-toggle');
    if (document.body.classList.contains('dark-theme')) {
        themeToggle.innerHTML = '<span class="icon">☀️</span> Mode clair';
    } else {
        themeToggle.innerHTML = '<span class="icon">🌙</span> Mode sombre';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadTheme();
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
});