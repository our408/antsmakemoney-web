import styled from 'styled-components'
import { COLORS } from '@resources/colors'

const Container = styled.div`
  font-family: AppleSDGothicNeo;
  padding: 10px;
  height: 25px;
  font-size: 10px;
  background-color: ${COLORS.black30};
  margin: 10px 0%;
`

export const Footer = () => {
  return (
    <Container>
      각 증권사의 애널리스트들이 작성한 리포트를 기반으로 종목, 목표주가 등의
      데이터를 하나로 모아 제공합니다. 투자의 최종적인 책임은 투자자 본인에게
      있습니다.
    </Container>
  )
}
