// iniciar dropdown de notificaciones
function inicializarDropdown() {
    const dropdownBtn = document.getElementById("notificaciones-dropdown-btn");
    const dropdown = document.querySelector(".dropdown");

    configurarToggleDropdown(dropdownBtn, dropdown);
    configurarClickFueraDropdown(dropdown, dropdownBtn);

}


function configurarToggleDropdown(dropdownBtn, dropdown) {
    dropdownBtn.addEventListener("click", function (event) {
        event.preventDefault();
        dropdown.classList.toggle("active");
    });
}

// cerrar el dropdown al hacer clic fuera de él
function configurarClickFueraDropdown(dropdown, dropdownBtn) {
    window.addEventListener("click", function (event) {
        if (!event.target.closest(".dropdown") && event.target !== dropdownBtn) {
            dropdown.classList.remove("active");
        }
    });
}


function inicializarNotificaciones() {
    const dropdown = document.getElementById('notificaciones-dropdown');
    const notificaciones = [
        "✅ Vacuna programada para el 25 de febrero",
        "⚠️ Revisión de peso pendiente",
        "🔔 Control antiparasitario en 3 días"
    ];

    dropdown.innerHTML = "";

    if (notificaciones.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = "No hay notificaciones disponibles.";
        dropdown.appendChild(emptyMessage);
        return;
    }

    notificaciones.forEach(notificacion => {
        const li = document.createElement('li');
        li.textContent = notificacion;
        dropdown.appendChild(li);
    });
}

// inicializar toda la aplicación
function iniciarApp() {
    inicializarDropdown();
    inicializarNotificaciones();
}

document.addEventListener("DOMContentLoaded", iniciarApp);