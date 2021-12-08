import styled from 'styled-components'
import { SIZES, IDiv } from '@resources/sizes'

interface ITableHeadLinesProps {
  content: string[]
}

const TableHeadLineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 13px;
  text-align: center;
`

const TableHeadLine = styled.div<IDiv>`
  width: ${(props) => props.width};
  box-sizing: border-box;
  border-bottom: 1px solid black;
`

export const TableHeadLines = (props: ITableHeadLinesProps) => {
  return (
    <TableHeadLineContainer>
      {props.content.map((content: string, index: number) => {
        return <TableHeadLine width={SIZES.interval} key={index} />
      })}
    </TableHeadLineContainer>
  )
}
