import styled from 'styled-components'
import { SIZES, IDiv } from '@resources/sizes'

const Container = styled.section<IDiv>`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: ${({ margin }) => `5px ${margin}`};
`

const HeadContent = styled.span<IDiv>`
  width: 25%;
  padding: 8px 0px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;

  font-weight: 500;
  font-size: 11px;
`

interface ITableHead {
  contents: string[]
}

export const TableHead = ({ contents }: ITableHead) => {
  return (
    <Container margin={SIZES.sideMargin}>
      {contents.map((content: string, index: number) => {
        return (
          <HeadContent width={SIZES.interval} key={index}>
            {content}
          </HeadContent>
        )
      })}
    </Container>
  )
}

interface IHeadContentsProps {
  content: string[]
}

const HeadContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 13px;
  text-align: center;
`

const TableHeadContents = ({ content }: IHeadContentsProps) => {
  return (
    <HeadContentContainer>
      {content.map((content: string, index: number) => {
        return (
          <HeadContent width={SIZES.interval} key={index}>
            {content}
          </HeadContent>
        )
      })}
    </HeadContentContainer>
  )
}

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

const TableHeadLines = (props: ITableHeadLinesProps) => {
  return (
    <TableHeadLineContainer>
      {props.content.map((content: string, index: number) => {
        return <TableHeadLine width={SIZES.interval} key={index} />
      })}
    </TableHeadLineContainer>
  )
}
