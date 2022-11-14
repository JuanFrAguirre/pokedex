import axios from 'axios'

const pokemonService = () => ({
  getPokemon: async (name: string) => {
    return await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`,
    )
  },
})

export default pokemonService
