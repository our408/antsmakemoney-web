import styled from 'styled-components'
import { ant200 } from '@resources/img'
import { Line } from '@components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`

const Title = styled.div`
  font-size: 16px;
`
const Ant = styled.img`
  width: 24px;
`

export const Header = () => {
  return (
    <header>
      <Container>
        <Title>개미도 때론 돈을 번다</Title>
        <Ant src={ant200} alt="🐜" />
      </Container>
      <Line />
    </header>
  )
}
