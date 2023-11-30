import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [clase, setClase] = useState({
    materia: "",
    carrera: "",
    profesor: "",
    aula: "",
    sede: "",
    hora_inicio: "",
    hora_fin: "",
  });

  const { materia, carrera, profesor, aula, sede, hora_inicio, hora_fin } = clase;

  const onInputChange = (e) => {
    setClase({ ...clase, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadClase();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8082/Clase/${id}`, clase);
    navigate("/");
  };

  const loadClase = async () => {
    const result = await axios.get(`http://localhost:8082/Clase/${id}`);
    setClase(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Editar Clase</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Materia" className="form-label">
                Materia
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Materia"
                name="materia"
                value={materia}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Carrera" className="form-label">
                Carrera
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Carrera"
                name="carrera"
                value={carrera}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Profesor" className="form-label">
                Profesor
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Profesor"
                name="profesor"
                value={profesor}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Aula" className="form-label">
                Aula
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Aula"
                name="aula"
                value={aula}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Sede" className="form-label">
                Sede
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Sede"
                name="sede"
                value={sede}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Hora_incio" className="form-label">
                Hora Inicio
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Hora inicio"
                name="hora_inicio"
                value={hora_inicio}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Hora_fin" className="form-label">
                Hora Fin
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Hora fin"
                name="hora_fin"
                value={hora_fin}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
