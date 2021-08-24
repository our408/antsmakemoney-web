import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { SIZES } from '@resources/sizes'

const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: #ffffff;

  border-top: 0.5px solid black;

  position: sticky;
  position: --webkit-sticky;
  bottom: 0;
`

const NavContent = styled(Link)`
  display: block;
  font-size: 12px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  text-decoration: none;
  color: black;
`

export const Nav = () => {
  return (
    <Container>
      <NavContent to={'/thisweek'}>이번주</NavContent>
      <NavContent to={'/lastweek'}>저번주</NavContent>
      <NavContent to={'/meditation'}>불안해?</NavContent>
      <NavContent to={'/mypage'}>마이페이지</NavContent>
    </Container>
  )
}
