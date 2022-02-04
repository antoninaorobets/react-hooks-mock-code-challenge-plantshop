import React,{useState} from "react";

function PlantCard({plant}) {
  const [isInStock, setIsInStock]= useState(true)
  const [price,szetPrice]=useState(plant.price)

  const handlePriceChange = (event) => {
    fetch(`http://localhost:6001/plants/${plant.id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...plant,
        price: [event.target.value]
      })
    }).then(resp=>resp.json()).then(data=>console.log(data))
    szetPrice(event.target.value)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: <input type="number" name="price" value={price} onChange={handlePriceChange}></input> </p>
      {isInStock ? (
        <button className="primary" onClick={()=>setIsInStock(!isInStock)}>In Stock</button>
      ) : (
        <button onClick={()=>setIsInStock(!isInStock)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
