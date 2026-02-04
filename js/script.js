function updateGreeting() {
    const hour = new Date().getHours();
    const greetingElement = document.getElementById('greeting');
    let greeting = '';
    
    if (hour < 12) {
        greeting = '¡Buenos días!';
    } else if (hour < 19) {
        greeting = '¡Buenas tardes!';
    } else {
        greeting = '¡Buenas noches!';
    }
    
    greetingElement.textContent = greeting;
}

// Ejecutar cuando cargue la página
document.addEventListener('DOMContentLoaded', updateGreeting);

// Botón para mostrar/ocultar la sección de educación
function setupEducationToggle() {
    const toggleBtn = document.getElementById('toggleEducation');
    const educationSection = document.querySelector('.education .table-responsive');
    
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            if (educationSection.style.display === 'none') {
                educationSection.style.display = 'block';
                toggleBtn.innerHTML = '<i class="bi bi-eye me-1"></i>Mostrar';
            } else {
                educationSection.style.display = 'none';
                toggleBtn.innerHTML = '<i class="bi bi-eye-slash me-1"></i>Ocultar';
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', setupEducationToggle);

// Modo oscuro/claro
function setupDarkMode() {
    const toggleBtn = document.getElementById('darkModeToggle');
    
    if (toggleBtn) {
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark-mode');
            toggleBtn.innerHTML = '<i class="bi bi-sun me-1"></i>Modo Claro';
        }
        
        toggleBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
                toggleBtn.innerHTML = '<i class="bi bi-sun me-1"></i>Modo Claro';
            } else {
                localStorage.setItem('darkMode', 'disabled');
                toggleBtn.innerHTML = '<i class="bi bi-moon me-1"></i>Modo Oscuro';
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', setupDarkMode);

// Botón para mostrar/ocultar contacto
function setupContactToggle() {
    const toggleBtn = document.getElementById('toggleContact');
    const contactNav = document.querySelector('.contact-nav');
    
    if (toggleBtn && contactNav) {
        if (window.innerWidth < 768) {
            contactNav.style.display = 'none';
            toggleBtn.innerHTML = '<i class="bi bi-chevron-down me-1"></i>Mostrar Contacto';
        }
        
        toggleBtn.addEventListener('click', function() {
            if (contactNav.style.display === 'none') {
                contactNav.style.display = 'flex';
                toggleBtn.innerHTML = '<i class="bi bi-chevron-up me-1"></i>Ocultar Contacto';
            } else {
                contactNav.style.display = 'none';
                toggleBtn.innerHTML = '<i class="bi bi-chevron-down me-1"></i>Mostrar Contacto';
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', setupContactToggle);