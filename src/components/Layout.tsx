import { useState } from 'react'
import { PokemonDataContext } from '../context/PokemonContext'
import OldPokedex from './OldPokedex'
import { Pokemon } from '../types/pokemon'

const Layout: React.FC = () => {
  const [pokemonData, setPokemonData] = useState<Pokemon | null>()
  const [pokemonName, setPokemonName] = useState('')
  const [loading, setLoading] = useState(false)

  return (
    <>
      <PokemonDataContext.Provider
        value={{
          data: pokemonData,
          setData: setPokemonData,
          name: pokemonName,
          setName: setPokemonName,
          loading,
          setLoading,
        }}
      >
        <OldPokedex />
      </PokemonDataContext.Provider>
    </>
  )
}

export default Layout
