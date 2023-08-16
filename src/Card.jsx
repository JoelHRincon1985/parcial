import React from "react";



const Card = ({ marca, modelo }) => (
    <div className="card">
      <h2>{marca}</h2>
      <p>Modelo: {modelo}</p>
    </div>
);
export default Card;
