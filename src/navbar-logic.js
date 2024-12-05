const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-full'); mobileMenu.classList.add('translate-x-0');
});

mobileMenuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-0');
    mobileMenu.classList.add('translate-x-full');
});

const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');

mobileDropdowns.forEach(dropdown => {
    const toggleButton = dropdown.querySelector('.mobile-dropdown-toggle');
    const dropdownMenu = dropdown.querySelector('ul');

    toggleButton.addEventListener('click', () => {
        dropdownMenu.classList.toggle('hidden');
    });
});