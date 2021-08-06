import styled from 'styled-components'
import { SIZES, IDiv } from '@resources/sizes'

interface ITableHeadContentsProps {
  content: string[]
}

const TableHeadContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 13px;
  text-align: center;
`

const TableHeadContent = styled.div<IDiv>`
  width: ${(props) => props.width || '360px'};
  margin: 6px 0px 0px 0px;
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
`

export const TableHeadContents = (props: ITableHeadContentsProps) => {
  return (
    <TableHeadContentContainer>
      {props.content.map((content: string, index: number) => {
        return (
          <TableHeadContent width={SIZES.interval} key={index}>
            {content}
          </TableHeadContent>
        )
      })}
    </TableHeadContentContainer>
  )
}
