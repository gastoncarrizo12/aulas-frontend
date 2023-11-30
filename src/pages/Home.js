import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [clase, setClase] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadClase();
  }, []);

  const loadClase = async () => {
    const result = await axios.get("http://localhost:8082/Clases");
    setClase(result.data);
  };

  const deleteClase = async (id) => {
    await axios.delete(`http://localhost:8082/Clase/${id}`);
    loadClase();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Materia</th>
              <th scope="col">Carrera</th>
              <th scope="col">Profesor</th>
              <th scope="col">Aula</th>
              <th scope="col">Sede</th>
              <th scope="col">Hora incio</th>
              <th scope="col">Hora fin</th>
            </tr>
          </thead>
          <tbody>
            {clase.map((clase, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{clase.materia}</td>
                <td>{clase.carrera}</td>
                <td>{clase.profesor}</td>
                <td>{clase.aula}</td>
                <td>{clase.sede}</td>
                <td>{clase.hora_inicio}</td>
                <td>{clase.hora_fin}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${clase.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edituser/${clase.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteClase(clase.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
