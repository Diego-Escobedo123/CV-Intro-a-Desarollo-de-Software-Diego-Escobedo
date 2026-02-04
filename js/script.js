// 1. Saludo Dinámico
const hora = new Date().getHours();
let saludo = '';

if (hora < 12) saludo = '¡Buenos días!';
else if (hora < 19) saludo = '¡Buenas tardes!';
else saludo = '¡Buenas noches!';

document.getElementById('greeting').textContent = saludo;

// 2. Toggle educación
document.getElementById('toggleEducation').addEventListener('click', function() {
    const tabla = document.querySelector('.education .table-responsive');
    const estaOculto = tabla.style.display === 'none';
    
    tabla.style.display = estaOculto ? 'block' : 'none';
    this.innerHTML = estaOculto ? 
        '<i class="bi bi-eye me-1"></i>Mostrar' : 
        '<i class="bi bi-eye-slash me-1"></i>Ocultar';
});

// 3. Modo oscuro
const modoBtn = document.getElementById('darkModeToggle');

// Cargar preferencia guardada
if (localStorage.getItem('modoOscuro') === 'activado') {
    document.body.classList.add('dark-mode');
    modoBtn.innerHTML = '<i class="bi bi-sun me-1"></i>Modo Claro';
}

modoBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('modoOscuro', 'activado');
        this.innerHTML = '<i class="bi bi-sun me-1 bi"></i>Modo Claro';
    } else {
        localStorage.setItem('modoOscuro', 'desactivado');
        this.innerHTML = '<i class="bi bi-moon me-1"></i>Modo Oscuro';
    }
});

// 4. Toggle de Contacto
const contactoBtn = document.getElementById('toggleContact');
const contactoNav = document.querySelector('.contact-nav');

// Ocultar en móviles al cargar
if (window.innerWidth < 768) {
    contactoNav.style.display = 'none';
}

contactoBtn.addEventListener('click', function() {
    const estaOculto = contactoNav.style.display === 'none';
    
    contactoNav.style.display = estaOculto ? 'flex' : 'none';
    this.innerHTML = estaOculto ? 
        '<i class="bi bi-chevron-up me-1"></i>Ocultar Contacto' : 
        '<i class="bi bi-chevron-down me-1"></i>Mostrar Contacto';
});

// 5. Buscador de habilidades
const buscador = document.getElementById('skillSearch');
const habilidades = document.querySelectorAll('.skill-badge');

buscador.addEventListener('input', function() {
    const textoBuscado = this.value.toLowerCase().trim();
    
    habilidades.forEach(habilidad => {
        const textoHabilidad = habilidad.textContent.toLowerCase();

        if (textoHabilidad.includes(textoBuscado)) {
            habilidad.style.display = 'inline-block';
            habilidad.style.opacity = '1';
        } else {
            habilidad.style.display = 'none';
            habilidad.style.opacity = '0.3';
        }
    });
    
    // Mostrar mensaje si no hay resultados
    const hayResultados = Array.from(habilidades).some(h => 
        h.textContent.toLowerCase().includes(textoBuscado)
    );
    
    if (textoBuscado && !hayResultados) {
        if (!document.getElementById('no-results')) {
            const mensaje = document.createElement('div');
            mensaje.id = 'no-results';
            mensaje.className = 'mt-2 text-muted small';
            mensaje.textContent = 'No se encontraron habilidades con ese nombre';
            document.getElementById('skillsList').appendChild(mensaje);
        }
    } else {
        const mensaje = document.getElementById('no-results');
        if (mensaje) mensaje.remove();
    }
});

document.querySelector('#skillSearch + .btn').addEventListener('click', function() {
    buscador.value = '';
    buscador.dispatchEvent(new Event('input'));
});

document.getElementById('downloadPdf').addEventListener('click', function() {
    window.print();
    
    alert('Para guardar como PDF:\n1. En la ventana de impresión\n2. Selecciona "Guardar como PDF"\n3. Haz clic en Guardar');
});

window.addEventListener('load', function() {
    document.querySelector('.education .table-responsive').style.display = 'block';
});