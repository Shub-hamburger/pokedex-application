import React from 'react'
import './PokeCard.css'

interface PokecardProps {
  name: string,
  spriteURL?: string,
  onPokemonClick: (pokemonName: string) => void
}

const PokeCard = ({ name, spriteURL, onPokemonClick }: PokecardProps) => {
  return (
    <div onClick={() => onPokemonClick(name)} className="pokecard">
      <img 
        className="pokemon-sprite" 
        alt="pokemon" 
        src={spriteURL}
      />
      <p>{name}</p>
    </div>
  )
}

export default PokeCard
