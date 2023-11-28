document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;

    // Responsive Navigation
    const navbar = document.querySelector('.navbar');
    const toggleBtn = document.createElement('button');
    toggleBtn.innerHTML = '☰';
    toggleBtn.classList.add('navbar-toggle');
    toggleBtn.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
    navbar.appendChild(toggleBtn);

    // Smooth Scrolling
    const scrollLinks = document.querySelectorAll('.navbar a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - navbar.offsetHeight,
                    behavior: 'smooth'
                });
            }

            // Close the navigation menu on mobile
            navbar.classList.remove('active');
        });
    });

    // Toggle Dark Mode with the switch
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    darkModeToggle.addEventListener('change', function () {
        body.classList.toggle('dark-mode', this.checked);
        // Save user preference in localStorage
        localStorage.setItem('darkMode', this.checked);
    });

    // Check for dark mode preference in localStorage
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
        body.classList.toggle('dark-mode', savedDarkMode === 'true');
        darkModeToggle.checked = savedDarkMode === 'true';
    }

    // Tabs functionality
    const tabs = document.querySelectorAll('.navbar a');
    tabs.forEach(tab => {
        tab.addEventListener('click', function (event) {
            const targetTab = this.getAttribute('href');
            showTab(targetTab);

            // Prevent default behavior
            event.preventDefault();

            // Close the navigation menu on mobile
            navbar.classList.remove('active');
        });
    });
});

function showTab(tabId) {
    const allTabs = document.querySelectorAll('.tab-content');
    allTabs.forEach(tab => {
        tab.style.display = 'none';
    });

    const targetTab = document.querySelector(tabId);
    if (targetTab) {
        targetTab.style.display = 'block';
    }
}
