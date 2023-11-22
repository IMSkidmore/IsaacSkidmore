document.addEventListener('DOMContentLoaded', function () {
    // Add functionality to show the default tab
    showTab(window.location.hash || '#about');

    // Add event listeners for navigation
    const tabs = document.querySelectorAll('.navbar a');
    tabs.forEach(tab => {
        tab.addEventListener('click', function (event) {
            const targetTab = this.getAttribute('href');
            showTab(targetTab);
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
