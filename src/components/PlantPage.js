import React,{useState,useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((response) => response.json())
    .then((data) => setPlants(data))
      .catch(error=>console.error(error));
      }, []);

  const onAddPlant = (newPlant) => {
    fetch("http://localhost:6001/plants",{
      method: "POST",
      headers:{ "Content-Type" : "application/json"},
      body: JSON.stringify(newPlant)
    })
    .then((response) => response.json())
    .then((data)=>setPlants([...plants,data]))
      
  }

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search />
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
