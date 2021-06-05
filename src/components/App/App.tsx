import React, { useState, useEffect } from 'react'
import './App.css'
import Pokedex from '../Pokedex/Pokedex'
import { pokemonData } from '../../data/pokemonData';
import { pokemonSchema, PokemonSpriteSchema, unpatchedPokemonSchema } from '../../types/PokemonSchema';

interface AppState {
  searchField: string,
  allPokemons: pokemonSchema[],
  searchedPokemons: pokemonSchema[],
  selectedPokemon: pokemonSchema | undefined
}

const App = () => {
  const [pokeState, setPokeState] = useState<AppState>({
    searchField: "",
    allPokemons: [],
    searchedPokemons: [],
    selectedPokemon: undefined
  })

  const patchPokemonData = (pokemons: unpatchedPokemonSchema[]): pokemonSchema[] => {
    const patchedPokemons = pokemons.map(pokemon => {
      let parsedSprites: PokemonSpriteSchema = {
        normal: undefined,
        animated: undefined
      }

      try {
        parsedSprites = pokemon.sprites && JSON.parse(pokemon.sprites)
      } catch(err) {
        console.log(err)
      }

      const patchedPokemon: pokemonSchema = {
        ...pokemon,
        sprites: parsedSprites
      }

      return patchedPokemon
    })
    
    return patchedPokemons
  }
  
  useEffect(() => {
    // Patch pokemon types
    const patchedPokemons: pokemonSchema[] = patchPokemonData(pokemonData)

    // State update with patched pokemons
    setPokeState((prevState) => {
      return {
        ...prevState,
        allPokemons: patchedPokemons,
        searchedPokemons: patchedPokemons,
      }
    })
  }, [])

  const inputChangeHandler = (input: string) => {
    const { allPokemons } = pokeState

    const searchedPokemons = allPokemons.filter((pokemon: pokemonSchema) => {
      return (
        pokemon.name && pokemon.name.toLowerCase().includes(input.toLowerCase())
      )
    })
    setPokeState((prevState) => {
      return {
        ...prevState,
        searchField: input,
        searchedPokemons,
      }
    })
  }

  const clickHandler = (pokemonName: string) => {
    const { searchedPokemons } = pokeState

    const selectedPokemon = searchedPokemons.find((pokemon: pokemonSchema) => pokemon.name === pokemonName)

    setPokeState((prevState) => {
      return {
        ...prevState,
        selectedPokemon,
      }
    })
  }

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokedex 
        searchedPokemons={pokeState.searchedPokemons}
        selectedPokemon={pokeState.selectedPokemon}
        onPokemonClick={clickHandler}
        onInputChange={inputChangeHandler}
      />
    </div>
  )
}

export default App

