import React from 'react'
import { pokemonSchema } from '../../types/PokemonSchema'
import PokeList from '../PokeList/PokeList'
import PokeSearch from '../PokeSearch/PokeSearch'
import SearchBar from '../SearchBar/SearchBar'
import './Pokedex.css'

interface PokedexProps {
  searchedPokemons: pokemonSchema[],
  selectedPokemon: pokemonSchema | undefined,
  onInputChange: (input: string) => void,
  onPokemonClick: (pokemonName: string) => void
}

const Pokedex = ({ searchedPokemons, selectedPokemon, onInputChange, onPokemonClick }: PokedexProps) => {
  return (
    <div className="pokedex-container">
      <div className="pokelist-container">
        <SearchBar 
          onInputChange={onInputChange}
        />
        <PokeList
          searchedPokemons={searchedPokemons}
          onPokemonClick={onPokemonClick}
        />
      </div>
      <div className="pokesearchresult-container">
        <PokeSearch 
        selectedPokemon={selectedPokemon}
        />
      </div>
    </div>
  )
}

export default Pokedex
