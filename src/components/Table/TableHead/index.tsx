import styled from 'styled-components'
import { TableHeadLines } from './TableHeadLine'
import { TableHeadContents } from './TableHeadContent'
import { SIZES, IDiv } from '@resources/sizes'

const TableHeadWrap = styled.section<IDiv>`
  margin: ${(props) => `0 ${props.margin} 10px ${props.margin}`};
`

interface ITableHeadProps {
  content: string[]
}

export const TableHead = (props: ITableHeadProps) => {
  return (
    <TableHeadWrap margin={SIZES.sideMargin}>
      <TableHeadLines content={props.content} />
      <TableHeadContents content={props.content} />
      <TableHeadLines content={props.content} />
    </TableHeadWrap>
  )
}
