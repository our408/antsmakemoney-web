import styled from 'styled-components'
import { SIZES, IDiv } from '@resources/sizes'

export interface ITableBody {
  index: string
  code?: string
  cell11: string
  cell12: string
  cell13: string
  cell21: string
  cell22: string
  cell23: string
  cell11ClassName?: string
  cell23ClassName?: string
  arrow: string
}

interface ITableBodyData {
  interval?: string
  fontsize?: number
  subject?: boolean
  sector?: boolean
  value?: boolean
  sub?: boolean
  length?: number
}

interface ISpan {
  arrow?: boolean
}

const TableBodyContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

const TableBodyIndex = styled.div<IDiv>`
  height: 45px;
  width: ${(props) => props.margin};
  font-weight: bold;
  font-size: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
`

const TableBodyRow = styled.div<IDiv>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 45px;
  width: calc(100% - ${(props) => props.margin});

  border-bottom: 0.1px dotted #c4c4c4;
`

const TableBodyDataContainer = styled.div<IDiv>`
  display: flex;
  justify-content: space-between;
  margin: 0% ${(props) => props.margin} 0% 0%;
`

const TableBodyData = styled.div<ITableBodyData>`
  width: ${SIZES.interval};
  animation: modal-show 0.3s;

  @keyframes modal-show {
    from {
      margin-bottom: -10px;
    }
    to {
      margin-bottom: 0;
    }
  }

  ${(props) =>
    props.subject
      ? `
          font-weight: 500;
          font-size: ${props.length! > 7 ? '10px' : '13px'};
      `
      : undefined}

  ${(props) =>
    props.value
      ? `
      font-size: 14px;
      text-align: right;
    `
      : undefined}

  ${(props) =>
    props.sub
      ? `
      font-size: 10px;
      color: #9b9b9b;
    `
      : undefined}
`

const Span = styled.span<ISpan>`
  ${(props) => (props.arrow ? ` color : #60cb98` : undefined)}
`

const defaultProps = {
  interval: SIZES.interval,
  fontsize: 14,
  subject: false,
  sector: false,
  value: false,
  sub: false,
}

interface ITableBodyProps {
  data: ITableBody
}

export const TableBody = (props: ITableBodyProps) => {
  const { index, cell11, cell12, cell13, cell21, cell22, cell23, arrow } =
    props.data

  return (
    <TableBodyContainer>
      <TableBodyIndex margin={SIZES.sideMargin}>{index}</TableBodyIndex>
      <TableBodyRow margin={SIZES.sideMargin}>
        <TableBodyDataContainer margin={SIZES.sideMargin}>
          <TableBodyData subject length={cell11.length}>
            {cell11}
          </TableBodyData>
          <TableBodyData value>{cell12}</TableBodyData>
          <TableBodyData value>{cell13}</TableBodyData>
        </TableBodyDataContainer>

        <TableBodyDataContainer margin={SIZES.sideMargin}>
          <TableBodyData subject sub>
            {cell21}
          </TableBodyData>
          <TableBodyData value sub>
            {cell22}
          </TableBodyData>
          <TableBodyData value sub>
            <Span arrow>{arrow}</Span>
            <Span>{cell23}</Span>
          </TableBodyData>
        </TableBodyDataContainer>
      </TableBodyRow>
    </TableBodyContainer>
  )
}

TableBodyData.defaultProps = defaultProps
