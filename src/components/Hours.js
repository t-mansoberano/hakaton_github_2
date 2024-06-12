// Placeholder to host a component
// Para este desafío, crearás un nuevo componente React llamado Hours.js en la carpeta components. Añadirás el código necesario para mostrar las horas del día actual de la semana. Después de crear el componente, actualizarás index.js en la carpeta pages para importar el componente recién creado y mostrarlo en la página.
// components/Hours.js
import React from 'react';

const Hours = () => {
  const hours = Array.from({ length: 24 }, (_, i) => i);

  return (
    <div>
      <h2>Horas del día</h2>
      <ul>
        {hours.map((hour) => (
          <li key={hour}>{hour}:00</li>
        ))}
      </ul>
    </div>
  );
};

export default Hours;
