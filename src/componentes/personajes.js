import React, { useState, useEffect } from "react";

const Personajes = ({ products = [] }) => {
  const [personaje, setpersonaje] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((res) => res.json())
      .then((data) => setpersonaje(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="row container text-center">
      {personaje.map((info) => {
        if (info.image) {
          return (
            <div key={info.id} className="col mb-4">
              <div
                className="card"
                style={{ maxWidth: "200px", minWidth: "200px" }}
              >
                <img src={info.image} alt="" />
                <div className="card-body">
                  <h5 className="card-title">{info.name}</h5>
                  <hr />
                  <p>Casa: {info.house}</p>
                  <p>Cumpleaños: {info.dateOfBirth}</p>
                  <p>Estado: {info.alive ? "Vivo" : "Muerto"}</p>
                  <hr />
                  <p>Actor: {info.actor}</p>
                </div>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default Personajes;
