import React, { useEffect, useState } from 'react'
import { getPokemon } from '../../api/getPokemons'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import '../../App.css'

export const AboutUs = () => {
    const [ poke, setPoke ] = useState()
    const {name} = useParams()

    useEffect(() => {
        getPokemon(name)
            .then((pok) => setPoke(pok))
    },[name])

    return (
        <div className="container">

            <div className='btnBox'>
                <Link to={'/'}><button className='linkBtn'>Home</button></Link>
            </div>

            <div className='pokeContent'>
                <div className='pokemonInfo'>
                    <div className='pokemonName'>{poke?.name}</div>
                    <img src={poke?.sprites?.other?.dream_world?.front_default} alt={poke?.name}/>
                </div>

                <div className='pokemonInfo'>
                    <div className='pokeInfo'>
                        <h2 className='pokeStatsInfo'>{poke?.name} Stats :</h2>
                        <h2>Base Exp: {poke?.base_experience}</h2>
                        <h2>Attack: {poke?.stats[1]?.base_stat}</h2>
                        <h2>Weight: {poke?.weight}</h2>
                        <h2>Height: {poke?.height}</h2>
                        <h2>Hit Points: {poke?.stats[0]?.base_stat}</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}