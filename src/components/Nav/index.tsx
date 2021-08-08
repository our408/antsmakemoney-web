import styled from 'styled-components'

const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #ffffff;

  border-top: 0.5px solid black;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
`

const NavContent = styled.a`
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
      <NavContent>이번주</NavContent>
      <NavContent>저번주</NavContent>
      <NavContent>마이페이지</NavContent>
    </Container>
  )
}
