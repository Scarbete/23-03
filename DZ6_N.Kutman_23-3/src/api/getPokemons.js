import axios from "axios"
const BASE_URL = 'https://pokeapi.co/api/v2'

export const fetchPokemons = async ( offset ) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/pokemon?limit=12&offset=${offset}`)
        return data.results
    }
    catch (error) {
        console.log(error)
    }
}

export const getPokemonUrl = async ( url ) => {
    try {
        const { data } = await axios.get(url)
        return data
    }
    catch (error) {
        console.log(error)
    }
}