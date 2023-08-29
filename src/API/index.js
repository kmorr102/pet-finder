export async function fetchAllPets(){
    try {
        const response=await fetch('http://localhost:8080/api/v1/pets')
        const result=await response.json()
        console.log(result)
        return result
    } catch (error) {
        console.log(error)
        
    }
}