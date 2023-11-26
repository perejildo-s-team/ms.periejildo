document.addEventListener('DOMContentLoaded', function () {
  // Realizar la solicitud a la API
  fetch('API')
      .then(response => response.json())
      .then(data => {
          // Actualizar la tabla con los datos obtenidos de la API
          const tablaResultados = document.getElementById('tablaResultados');
          const tbody = tablaResultados.querySelector('tbody');

          // Limpiar el contenido existente en la tabla
          tbody.innerHTML = '';

          // Iterar sobre los datos y agregar filas a la tabla
          data.forEach(item => {
              const row = `<tr>
                              <td>${item.metrica}</td>
                              <td>${item.valor}</td>
                           </tr>`;
              tbody.innerHTML += row;
          });
      })
      .catch(error => console.error('Error al obtener datos de la API:', error));
});
