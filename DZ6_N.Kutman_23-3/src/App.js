import { useEffect, useState } from "react"
import { fetchPokemons } from "./api/getPokemons"
import { PokemonCard } from "./components/PokemonCard";
import './App.css'

export default function App() {

  const [theme, setTheme] = useState('dark')
  const [pokemonList, setPokemonList] = useState([])
  let [ offset, setOffSet ] = useState(24)

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  useEffect(() => {fetchPokemons(offset)
      .then((pokeList) => setPokemonList(pokeList))
      .catch((error) => console.error(error))
  }, [offset])

  console.log(pokemonList, 'pokemon list state')


  const handlePrev = () => {
    if (offset <= 11) return
    setOffSet(prev => prev - 12)
  }

  const handleNext = () => {
    setOffSet(prev => prev + 12)
  }

  return (
      <div className={`app ${theme}`}>
        <div className="container">

          <div className='btnBox'>
            <button className='themeBtn' onClick={handlePrev}>Prev</button>
            <button className='themeBtn' onClick={toggleTheme}>Change Theme</button>
            <button className='themeBtn' onClick={handleNext}>Next</button>
          </div>

          <div className="pokemonList">
            {pokemonList.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon} />)}
          </div>

        </div>
      </div>
  )
}