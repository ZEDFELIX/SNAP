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

function handleSignup(event) {
    event.preventDefault();

    const username = document.getElementById('signup-username');
    const email = document.getElementById('signup-email');
    const password = document.getElementById('signup-password');
    const confirmPassword = document.getElementById('signup-confirm-password');

    if (!username || !email || !password || !confirmPassword) {
        return;
    }

    if (password.value !== confirmPassword.value) {
        alert('Passwords do not match.');
        return;
    }

    event.target.reset();
    alert('Account created! Check your email to verify.');
}