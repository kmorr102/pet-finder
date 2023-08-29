import { fetchAllPets } from "../API"
import App from "../App"
import { useEffect, useState } from "react"
import { Home } from "./Home"

export function SinglePet(){
    const[pets,setPets]=useState([])
    const[error,setError]=useState(null)

useEffect(()=>{
    async function getAllPets(){
            const response= await fetchAllPets();
            if(response){
                setPets(response)
            }else{
                setError(response.error);
            console.log("Error Message:",error)
            }
    }
    getAllPets();
},[])

const petsToDisplay=pets
console.log(petsToDisplay)
return(
        <>
        
        {petsToDisplay.map((pet)=>(
            <div key={pet.id} className="pets">
            <h2>{pet.name}</h2>
            <h3>Breed:{pet.breed}</h3>
            <h3>Age:{pet.age}</h3>
            <h4>Owner Name:{pet.owner}</h4>
            <h5>Owner Contact:{pet.telephone}</h5>
            </div>
                
        ))}
       
        </>
    )
}
