import React,{useState,useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [filterBy, setfilterBy]= useState('')
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

  console.log(filterBy)
  const listToDisplay = plants.filter(plant=> plant.name.includes(filterBy))

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search  onFilter={setfilterBy} />
      <PlantList plants={listToDisplay}/>
    </main>
  );
}

export default PlantPage;
