import React,{useState} from "react";

function PlantCard({plant}) {
  const [isInStock, setIsInStock]= useState(true)
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isInStock ? (
        <button className="primary" onClick={()=>setIsInStock(!isInStock)}>In Stock</button>
      ) : (
        <button onClick={()=>setIsInStock(!isInStock)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
