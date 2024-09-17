import {useEffect, useState} from 'react'
import './App.css'

function useAnimalSearch() {
    const search = async (q) => {
        const response = await fetch (
            'http://localhost:8080?' + new URLSearchParams({q})
        )
        const data = await response.json()
        localStorage.setItem('lastQuery',q)
        setAnimals(data)
    }

    const [animals, setAnimals] = useState([])

    useEffect(() => {
        const lastQuery = localStorage.getItem('lastQuery')
        search(lastQuery)
    }, []);

    return { search, animals}
}

function Animal({type, name, age}) {
    return (
        <li>
            <strong>{type}</strong> {name} ({age} years old)
        </li>
    )
}

function App() {

    const {search, animals} = useAnimalSearch()

    return (
        <div>
            <h1>Animal Farm</h1>
            <input type="text" placeholder="search" onChange={(e) => search(e.target.value)}></input>
          <ul>
              {animals.map((animal) => (
                  // <Animal key={animal.id} type={animal.type} name={animal.name} age={animal.age}/>
                  <Animal key={animal.id} {...animal}/> //the same thing as above just different syntax
              ))}
              {animals.length === 0 && 'No Animals Found!'}
          </ul>
      </div>
  )
}

export default App
