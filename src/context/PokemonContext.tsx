import { Dispatch, SetStateAction } from 'react'
import { createContext } from 'react'
import { Pokemon } from '../types/pokemon'

interface PokemonData {
  data: Pokemon
  setData: Dispatch<SetStateAction<Pokemon>>
  name: string
  setName: Dispatch<SetStateAction<string>>
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
}

export const PokemonDataContext = createContext<PokemonData | null>(null)
