import { useEffect, useState } from "react";

export default function ServiciosClave() {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    fetch("/api/servicios")   // <-- IMPORTANTE: usa Ingress, NO localhost
      .then((res) => res.json())
      .then((data) => setServicios(data))
      .catch(() => setServicios(["Error al obtener servicios"]));
  }, []);

  return (
    <div>
      <h2>Servicios Clave</h2>
      <ul>
        {servicios.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}
