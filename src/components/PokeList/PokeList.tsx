import React from 'react'
import './PokeList.css'
import PokeCard from '../PokeCard/PokeCard'
import { pokemonSchema } from '../../types/PokemonSchema'

interface PokelistProps {
  searchedPokemons: pokemonSchema[],
  onPokemonClick: (pokemonName: string) => void
}

const PokeList = ({ searchedPokemons, onPokemonClick }: PokelistProps) => {
  return (
    <div className="pokelist">
      {
        searchedPokemons.map(pokemon => {
          return (
            pokemon.name && (
              <PokeCard 
                key={pokemon.id}
                name={pokemon.name}
                spriteURL={pokemon.sprites.normal}
                onPokemonClick={onPokemonClick}
              />
            )
          )
        })
      }
    </div>
  )
}

export default PokeList
