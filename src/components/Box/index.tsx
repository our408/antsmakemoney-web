import styled from 'styled-components'

const Box = styled.div`
  height: 150px;
  width: 130px;
  margin: 10px;
  border: 1px solid black;
  padding: 10px;
  overflow: scroll;
`

const BoxDate = styled.span`
  display: block;
  font-size: 16px;
  height: 30px;
`

interface IQnABox {
  date?: string
  content: string
}

export const QnABox = (props: IQnABox) => {
  const { date, content } = props
  return (
    <Box>
      <BoxDate>{date}</BoxDate>
      {content}
    </Box>
  )
}
