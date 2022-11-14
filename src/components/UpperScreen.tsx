import { ChangeEvent } from 'react'
import { useRef } from 'react'
import { useContext, useState, useEffect, KeyboardEvent } from 'react'
import { PokemonDataContext } from '../context/PokemonContext'
import pokemonService from '../services/pokemonService'
import styled from 'styled-components'
import PokemonTable from './PokemonTable'
import { capitalize } from '../utilities/textUtils'

const UpperContainer = styled.div`
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const SearchBar = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`
const SearchInputContainer = styled.div`
  overflow: hidden;
`

const SearchInput = styled.input`
  box-sizing: border-box;
  padding: 10px 15px;
  font-size: 20px;
  border: 3px solid maroon;
  background-color: #ccc;
  border-radius: 10px;
  &:active,
  &:focus {
    border: 3px solid red;
    outline: none;
  }
  &::placeholder {
    font-size: 16px;
  }
`

const SearchButton = styled.button`
  font-size: 30px;
  border: none;
  border-radius: 500px;
  width: 50px;
  height: 50px;
  display: grid;
  place-content: center;
  /* border: 3px solid transparent; */
  &:active {
    border: none;
    outline: none;
    transform: scale(0.95);
    border: 3px solid red;
  }
  &:focus {
    border: none;
    outline: none;
    border: 3px solid red;
  }
`

const UpperScreen = () => {
  const { setData, name, setName, setLoading } = useContext(PokemonDataContext)
  const [inputText, setInputText] = useState('')

  const searchInput = useRef<HTMLInputElement>()

  useEffect(() => {
    searchInput.current.focus()
  }, [])

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      let res = await pokemonService().getPokemon(name)
      if (res.status === 200) setData(res.data)
      setTimeout(() => setLoading(false), 500)
      return
    }
    if (name) getData()
  }, [name, setData, setLoading])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInputText(capitalize(e.target.value))
  const handleSearchClick = () => {
    searchInput.current.value = ''
    setName(inputText)
  }
  const handleEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearchClick()
  }

  return (
    <UpperContainer>
      <SearchBar>
        <SearchInputContainer>
          <SearchInput
            type="text"
            value={inputText}
            onChange={handleInputChange}
            onKeyUp={handleEnterPress}
            ref={searchInput}
            placeholder={`Type a pokemon's name or id`}
          />
        </SearchInputContainer>
        <SearchButton onClick={handleSearchClick}>🔍</SearchButton>
      </SearchBar>
      <PokemonTable />
    </UpperContainer>
  )
}

export default UpperScreen
