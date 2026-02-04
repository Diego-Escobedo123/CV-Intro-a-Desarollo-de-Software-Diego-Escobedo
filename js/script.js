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