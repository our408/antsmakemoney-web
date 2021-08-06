import styled from 'styled-components'
import { ant200 } from '@resources/img'
import { Line } from '@resources/GlobalStyles'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 5px 0px 5px;
`

const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
`

const Ant = styled.img`
  width: 50px;
`

export const Header = () => {
  return (
    <>
      <Container>
        <Title>개미도 때론 돈을 번다</Title>
        <Ant src={ant200} alt="🐜" />
      </Container>
      <Line />
    </>
  )
}
