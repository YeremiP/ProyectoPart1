function saveCar() {
  const carType = document.getElementById("car-type").value.trim();
  const carModel = document.getElementById("car-model").value.trim();
  const carSpecifications = document.getElementById("car-specifications").value.trim();
  const carPrice = document.getElementById("car-price").value.trim();

  let valid = true;
  document.querySelectorAll(".error-message").forEach((el) => el.textContent = "");

  if (!carType) {
    document.getElementById("error-car-type").textContent = "El tipo de coche es obligatorio.";
    valid = false;
  }
  if (!carModel) {
    document.getElementById("error-car-model").textContent = "El modelo del coche es obligatorio.";
    valid = false;
  }
  if (!carSpecifications) {
    document.getElementById("error-car-specifications").textContent = "Las especificaciones son obligatorias.";
    valid = false;
  }
  if (!carPrice || isNaN(carPrice) || Number(carPrice) <= 0) {
    document.getElementById("error-car-price").textContent = "El precio debe ser un número positivo.";
    valid = false;
  }

  if (!valid) return;

  const carList = JSON.parse(localStorage.getItem("carList")) || [];
  const carId = localStorage.getItem("editCarId");

  const carData = { type: carType, model: carModel, specifications: carSpecifications, price: parseFloat(carPrice).toFixed(2) };

  if (carId) {
    carList[carId] = carData;
    localStorage.removeItem("editCarId");
  } else {
    carList.push(carData);
  }

  localStorage.setItem("carList", JSON.stringify(carList));
  window.location.href = "show-data.html";
}

window.addEventListener("DOMContentLoaded", () => {
  const carId = localStorage.getItem("editCarId");
  if (carId !== null) {
    const carList = JSON.parse(localStorage.getItem("carList")) || [];
    const car = carList[carId];
    if (car) {
      document.getElementById("car-type").value = car.type;
      document.getElementById("car-model").value = car.model;
      document.getElementById("car-specifications").value = car.specifications;
      document.getElementById("car-price").value = car.price;
    }
  }
});



// document.addEventListener('DOMContentLoaded', () => {
//   const carForm = document.getElementById('car-form');
//   const carTable = document.getElementById('car-table');

//   // Función para validar campos
//   function validateFields() {
//     let isValid = true;

//     // Obtener valores de los campos
//     const carType = document.getElementById('car-type').value.trim();
//     const carModel = document.getElementById('car-model').value.trim();
//     const carSpecifications = document.getElementById('car-specifications').value.trim();
//     const carPrice = document.getElementById('car-price').value.trim();

//     // Limpiar mensajes de error previos
//     document.querySelectorAll('.error-message').forEach((el) => (el.textContent = ''));

//     // Validar Tipo de coche
//     if (!carType) {
//       document.getElementById('error-car-type').textContent = 'Campo obligatorio';
//       isValid = false;
//     }

//     // Validar Modelo
//     if (!carModel) {
//       document.getElementById('error-car-model').textContent = 'Campo obligatorio';
//       isValid = false;
//     }

//     // Validar Especificaciones
//     if (!carSpecifications) {
//       document.getElementById('error-car-specifications').textContent = 'Campo obligatorio';
//       isValid = false;
//     }

//     // Validar Precio
//     if (!carPrice || isNaN(carPrice)) {
//       document.getElementById('error-car-price').textContent = 'Debe ser un número';
//       isValid = false;
//     }

//     return isValid;
//   }

//   // Función para agregar un coche a la tabla
//   function addCarToTable(car) {
//     const row = document.createElement('tr');

//     row.innerHTML = `
//       <td>${car.type}</td>
//       <td>${car.model}</td>
//       <td>${car.specifications}</td>
//       <td>${car.price.toFixed(2)} €</td>
//       <td>
//         <button onclick="editRow(this)">Editar</button>
//         <button onclick="deleteRow(this)">Eliminar</button>
//       </td>
//     `;

//     carTable.appendChild(row);
//   }

//   // Función para eliminar una fila de la tabla
//   window.deleteRow = function (button) {
//     const row = button.parentElement.parentElement;
//     carTable.removeChild(row);
//   };

//   // Función para editar una fila
//   window.editRow = function (button) {
//     const row = button.parentElement.parentElement;
//     const cells = row.querySelectorAll('td');

//     // Rellenar formulario con los datos de la fila
//     document.getElementById('car-type').value = cells[0].textContent;
//     document.getElementById('car-model').value = cells[1].textContent;
//     document.getElementById('car-specifications').value = cells[2].textContent;
//     document.getElementById('car-price').value = parseFloat(cells[3].textContent);

//     // Eliminar la fila mientras se edita
//     carTable.removeChild(row);
//   };

//   // Función para guardar los datos del formulario
//   window.saveCar = function () {
//     if (!validateFields()) return; // Si la validación falla, no continuar

//     // Obtener valores de los campos
//     const car = {
//       type: document.getElementById('car-type').value.trim(),
//       model: document.getElementById('car-model').value.trim(),
//       specifications: document.getElementById('car-specifications').value.trim(),
//       price: parseFloat(document.getElementById('car-price').value.trim()),
//     };

//     // Agregar coche a la tabla
//     addCarToTable(car);

//     // Limpiar el formulario
//     carForm.reset();
//   };
// });


