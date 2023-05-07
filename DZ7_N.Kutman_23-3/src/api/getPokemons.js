import { requester } from '../requester'

export const fetchPokemons = async ({ limit, offset }) => {
    try {
        const { data } = await requester.get(`/pokemon?limit=${limit}&offset=${offset}`)
        return data
    }
    catch (error) {console.log(error)}
}

export const getPokemon = async ( name ) => {
    try {
        const { data } = await requester.get(`/pokemon/${name}`)
        return data
    }
    catch (error) {console.log(error)}
}