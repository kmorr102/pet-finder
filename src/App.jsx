import { useState } from 'react'
import { Routes,Route,Link } from 'react-router-dom'
import './App.css'
import { fetchAllPets } from './API'
import { Home } from './components/Home'
import { SinglePet } from './components/SinglePet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Pet Finder</h1>

      <Link to={'/'}>Home</Link>
      <Link to={'/SinglePet'}>Details</Link>

       <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/SinglePet'element={<SinglePet/>}/>
       </Routes>
    </>
  )
}

export default App
