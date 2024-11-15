const savedData = JSON.parse(localStorage.getItem('formData')) || [];

// Seleccionar el contenedor donde se mostrarán los datos
const dataContainer = document.querySelector('.data-container');

// Limpiar el contenido inicial del contenedor
dataContainer.innerHTML = '<h1>Datos introducidos en el formulario</h1>';

// Verificar si hay datos guardados
if (savedData.length === 0) {
  dataContainer.innerHTML += '<p>No hay datos disponibles.</p>';
} else {
  // Crear elementos para cada entrada de datos
  savedData.forEach((data, index) => {
    const entry = document.createElement('div');
    entry.className = 'data-entry';

    entry.innerHTML = `
      <p><strong>Formulario ${index + 1}:</strong></p>
      <p><strong>Nombre del coche:</strong> ${data.carName}</p>
      <p><strong>Modelo:</strong> ${data.model}</p>
      <p><strong>Email:</strong> ${data.email}</p> 
      <hr>
    `;

    dataContainer.appendChild(entry);
  });
}
