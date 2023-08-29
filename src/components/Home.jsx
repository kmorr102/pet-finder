import { useNavigate } from "react-router-dom"
import { fetchAllPets } from "../API"
import App from "../App"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export function Home(){
  
   
return(
        <>
        <div className="pet-container">
        <img src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTDPaBi7DimL7-m2sZQM3if5KQUhI0d55qyYZBCOWp97hq9ST8w-apAFl4zaY76npNZhZ-pWDt8jm68yPI" alt="Fido" />
        <img src="https://qph.cf2.quoracdn.net/main-qimg-bebbae24acc4abfd484e5b8bf50d2d89-lq" alt="spot" />
        <img src="https://image.petmd.com/files/styles/863x625/public/2023-03/pit-bull.jpg" alt="rover" />
       
        </div>

       
        
        
       
        </>
    )
}
