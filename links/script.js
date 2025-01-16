// Theme toggle
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Set initial theme
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

// Update pageviews and add ready class immediately
window.onload = function() {
    // Set ready class immediately
    document.documentElement.classList.add('ready');
    
    // Update pageviews
    let views = localStorage.getItem('pageviews') || 0;
    views = parseInt(views) + 1;
    localStorage.setItem('pageviews', views);
    document.getElementById('pageviews').textContent = views.toLocaleString();
} 

document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', () => {
        const dropdown = button.parentElement;
        dropdown.classList.toggle('active');
    });
});