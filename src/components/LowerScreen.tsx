import { useContext } from 'react'
import styled from 'styled-components'
import { PokemonDataContext } from '../context/PokemonContext'

const LoadingMessage = styled.h2`
  color: #ccc;
  font-size: 40px;
`

const PokemonImg = styled.img`
  width: 95%;
  object-fit: cover;
`

const LowerScreen = () => {
  const { name, data, loading } = useContext(PokemonDataContext)

  return (
    name &&
    data && (
      <>
        {loading ? (
          <LoadingMessage>Fetching...</LoadingMessage>
        ) : (
          <PokemonImg src={data.sprites.front_default} alt={data.name} />
        )}
      </>
    )
  )
}

export default LowerScreen
