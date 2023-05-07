import React, { useEffect, useState } from 'react'
import { getPokemon } from '../api/getPokemons'
import { Link } from 'react-router-dom'
import '../App.css'

export const PokemonCard = ({ pokemon }) => {
    const [ pokemonInfo, setPokemonInfo ] = useState()

    useEffect(() => {
        getPokemon(pokemon.name)
            .then((data) => {setPokemonInfo(data)})
    },[pokemon.name])

    if (!pokemonInfo) return <div className={'pokemonCard'}>LOADING</div>

    return (
        <Link to={`/AboutUs/${pokemon?.name}`}>
            <div className='pokemonCard'>
                <div className='pokemonName'>{pokemon?.name}</div>
                <img src={pokemonInfo?.sprites?.other?.dream_world?.front_default} alt={pokemon?.name}/>
            </div>
        </Link>
    )
}