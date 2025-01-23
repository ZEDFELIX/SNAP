// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Example functionality for "View Profile" buttons
document.addEventListener('DOMContentLoaded', () => {
    const profileButtons = document.querySelectorAll('.talent-card button');

    profileButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Profile feature coming soon!');
        });
    });
});
