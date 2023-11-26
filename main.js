document.addEventListener('DOMContentLoaded', function () {
  // Realizar la solicitud a la API
  fetch('http://localhost:8080/Peregildo/status')
      .then(response => response.json())
      .then(data => {
          // Actualizar la tabla con los datos obtenidos de la API
          const tablaResultados = document.getElementById('tablaResultados');
          const tbody = tablaResultados.querySelector('tbody');
          // Limpiar el contenido existente en la tabla
          tbody.innerHTML = '';
		  // Mostrar ultimo valor
		  item = data.pop();
		  const row = `<tr>
                              <td>${item.id}</td>
                              <td>${item.soil_humidity}</td>
							  <td>${item.air_humidity}</td>
							  <td>${item.temperature}</td>
                           </tr>`;
			
		  tbody.innerHTML += row;
      })
      .catch(error => console.error('Error al obtener datos de la API:', error));
});
