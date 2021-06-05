import React from 'react'
import { pokemonSchema } from '../../types/PokemonSchema'
import './PokeSearch.css'

interface PokesearchProps {
  selectedPokemon: pokemonSchema | undefined
}

const PokeSearch = ({selectedPokemon}: PokesearchProps) => {
  const { name, id, height, weight, base_experience, sprites } = selectedPokemon || {}

  return (
    <div className="poke-result-card">
      {
        selectedPokemon ? (
          <div>
            <img 
              className="pokemon-animated"
              alt="pokemon" 
              src={sprites?.animated || sprites?.normal}
            />
            <p>Name: {name}</p>
            <p>Id: {id}</p>
            <p>Height: {height} cm</p>
            <p>Weight: {weight} lbs</p>
            <p>Base Exp: {base_experience}</p>
        </div>
        ) : (
          <h2>Welcome to the Pokedex</h2>
        )
      }
    </div>
  )
}

export default PokeSearch
