import styled from 'styled-components'
import { Line } from '@resources/GlobalStyles'

const TableTitleDescription = styled.h1`
  height: 16px;
  font-size: 15px;
  font-weight: 500;
  margin: 0 0 5px 0;
`

const TableTitleDuration = styled.div`
  font-size: 12px;
  color: #9b9b9b;
`

const Container = styled.div`
  padding: 3% 6%;
`

const Week = styled.p`
  font-size: 14px;
  font-weight: 500;
`

interface ITableTitle {
  description: string
  duration: string
  week: string
}

export const TableTitle = (TableTitleObj: ITableTitle) => {
  return (
    <>
      <Line />
      <Container>
        <Week>[{TableTitleObj.week}]</Week>
        <TableTitleDescription>
          {TableTitleObj.description}
        </TableTitleDescription>
        <TableTitleDuration>{TableTitleObj.duration}</TableTitleDuration>
      </Container>
      <Line />
    </>
  )
}
