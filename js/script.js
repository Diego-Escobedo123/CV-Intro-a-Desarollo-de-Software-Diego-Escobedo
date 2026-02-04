function setGreeting() {
    const hour = new Date().getHours();
    const greetingElement = document.getElementById('greeting');
    
    let greeting;
    if (hour >= 5 && hour < 12) {
        greeting = '¡Buenos días!';
    } else if (hour >= 12 && hour < 19) {
        greeting = '¡Buenas tardes!';
    } else {
        greeting = '¡Buenas noches!';
    }
    
    greetingElement.textContent = greeting;
}

// Inicializar cuando la página cargue
document.addEventListener('DOMContentLoaded', function() {
    setGreeting();
});