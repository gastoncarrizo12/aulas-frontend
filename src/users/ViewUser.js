import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {

  const [clase, setClase] = useState({
    materia: "",
    carrera: "",
    profesor: "",
    hora_inicio: "",
    hora_fin: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadClase();
  }, []);

  const loadClase = async () => {
    const result = await axios.get(`http://localhost:8082/Clase/${id}`);
    setClase(result.data);
  };
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Detalle de Clase</h2>

          <div className="card">
            <div className="card-header">
              id de la clase : {clase.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Materia </b>
                  {clase.materia}
                </li>
                <li className="list-group-item">
                  <b>Carrera </b>
                  {clase.carrera}
                </li>
                <li className="list-group-item">
                  <b>Profesor </b>
                  {clase.profesor}
                </li>
                <li className="list-group-item">
                  <b>Aula </b>
                  {clase.aula}
                </li>
                <li className="list-group-item">
                  <b>Sede </b>
                  {clase.sede}
                </li>
                <li className="list-group-item">
                  <b>Hora incio </b>
                  {clase.hora_inicio}
                </li>
                <li className="list-group-item">
                  <b>Hora fin </b>
                  {clase.hora_fin}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            INICIO
          </Link>
        </div>
      </div>
    </div>
  );
}
