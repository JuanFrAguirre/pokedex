import styled from 'styled-components'
import React from 'react'
import { capitalize } from '../utilities/textUtils'
import { useContext } from 'react'
import { PokemonDataContext } from '../context/PokemonContext'

const Table = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  gap: 5px;
  width: 100%;
  color: #ccc;
`

const TableTitle = styled.h2`
  font-size: 35px;
  text-align: center;
  margin-bottom: 10px;
  color: red;
`

const FlexRow = styled.div<{ title?: any }>`
  display: flex;
  justify-content: space-around;
  align-items: center;

  ${(props) => (props.title ? `color: tomato;` : ``)}
`

const PokemonTable: React.FC = () => {
  const { loading, data } = useContext(PokemonDataContext)

  const getAbilities = (abilities: any[]) =>
    abilities.map((x: any, i: number) =>
      i !== data.abilities.length - 1
        ? `${capitalize(x.ability.name)}, `
        : capitalize(x.ability.name),
    )

  return (
    <Table>
      {!loading && data && (
        <>
          <TableTitle>{capitalize(data?.name)}</TableTitle>
          <FlexRow title>
            <p>Height</p>
            <p>Weight</p>
          </FlexRow>
          <FlexRow>
            <p>{data?.height / 10}m</p>
            <p>{data?.weight / 10}kg</p>
          </FlexRow>
          <FlexRow title>
            <p>Abilities</p>
          </FlexRow>
          <FlexRow>{getAbilities(data?.abilities)}</FlexRow>
        </>
      )}
    </Table>
  )
}

export default PokemonTable
