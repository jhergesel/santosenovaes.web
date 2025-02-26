function preventButtonTextChange() {
    const newsletterButton = document.querySelector('.newsletter-form button');
    newsletterButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default form submission
        // Ensure the button text remains "Assinar"
        newsletterButton.innerText = "Assinar";
    });
}

// Função para inicializar o menu mobile
function initMobileMenu() {
    const menuToggle = document.createElement('div');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '&#9776;';
    document.querySelector('nav').appendChild(menuToggle);

    menuToggle.addEventListener('click', () => {
        const menu = document.querySelector('.menu');
        menu.classList.toggle('active');
    });
}

// Função para animar os cards ao rolar a página
function animateOnScroll() {
    const cards = document.querySelectorAll('.area-card, .advogado-card');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    cards.forEach(card => {
        observer.observe(card);
    });
}

// Função para validar formulários
function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            const inputs = form.querySelectorAll('input, textarea');
            let isValid = true;

            inputs.forEach(input => {
                if (input.required && !input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });

            if (!isValid) {
                e.preventDefault();
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        });
    });
}

function redirectToDashboard(event) {
    event.preventDefault(); // Prevent the default form submission
    window.location.href = "user-dashboard.html"; // Redirect to user dashboard
}

function init() {
    initMobileMenu();
    animateOnScroll();
    initFormValidation();
}

// Inicializa o script quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', init);
