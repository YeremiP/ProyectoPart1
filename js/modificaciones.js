document.addEventListener("DOMContentLoaded", () => {
    // Crear un elemento de imagen para el cursor
    const cursorCar = document.createElement("img");
    cursorCar.src = "assets/img/cursor.png";  // Asegúrate de que esta ruta sea correcta
    cursorCar.alt = "Coche Clásico";
    cursorCar.classList.add("custom-cursor");
    document.body.appendChild(cursorCar);

    // Mostrar el coche cuando se carga correctamente
    cursorCar.onload = () => {
        cursorCar.style.display = "block";
    };

    // Manejar el error de carga de la imagen
    cursorCar.onerror = () => {
        console.error("Error al cargar la imagen del cursor. Verifica la ruta de la imagen.");
    };

    // Mueve la imagen del coche clásico con el ratón
    document.addEventListener("mousemove", (e) => {
        cursorCar.style.left = e.pageX + "px";
        cursorCar.style.top = e.pageY + "px";
    });

    // Oculta el coche clásico cuando el cursor sale de la ventana
    document.addEventListener("mouseleave", () => {
        cursorCar.style.display = "none";
    });

    // Muestra el coche clásico cuando el cursor vuelve a entrar
    document.addEventListener("mouseenter", () => {
        cursorCar.style.display = "block";
    });
});


