function loadCars() {
  const carList = JSON.parse(localStorage.getItem("carList")) || [];
  const carTable = document.getElementById("car-table");
  carTable.innerHTML = "";

  carList.forEach((car, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${car.type}</td>
      <td>${car.model}</td>
      <td>${car.specifications}</td>
      <td>${car.price} €</td>
      <td>
        <button onclick="editCar(${index})">Editar</button>
        <button onclick="deleteCar(${index})">Eliminar</button>
      </td>
    `;
    carTable.appendChild(row);
  });
}

function editCar(index) {
  localStorage.setItem("editCarId", index);
  window.location.href = "form.html";
}

function deleteCar(index) {
  const carList = JSON.parse(localStorage.getItem("carList")) || [];
  carList.splice(index, 1);
  localStorage.setItem("carList", JSON.stringify(carList));
  loadCars();
}

document.addEventListener("DOMContentLoaded", loadCars);
