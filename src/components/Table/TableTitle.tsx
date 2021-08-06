import styled from 'styled-components'
import { Line } from '@resources/GlobalStyles'

const TableTitleDescription = styled.div`
  margin: 3% 6% 1% 6%;
  height: 16px;

  font-style: normal;
  font-weight: bold;
  font-size: 15px;

  color: #000000;
`

const TableTitleDuration = styled.div`
  margin: 1% 6% 3% 6%;

  font-style: normal;
  font-weight: normal;
  font-size: 12px;

  color: #9b9b9b;
`
interface ITableTitle {
  description: string
  duration: string
}

export const TableTitle = (TableTitleObj: ITableTitle) => {
  return (
    <>
      <Line />
      <TableTitleDescription>{TableTitleObj.description}</TableTitleDescription>
      <TableTitleDuration>{TableTitleObj.duration}</TableTitleDuration>
      <Line />
    </>
  )
}
