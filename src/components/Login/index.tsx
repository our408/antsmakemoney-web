import styled from 'styled-components'
import KakaoLogin from 'react-kakao-login'
import { SIZES } from '@resources/sizes'
import { Line } from '@resources/GlobalStyles'
import {
  antHead,
  kakaoLogin as kakaoLoginImage,
  antsLogin,
} from '@resources/img'
import { useState, useEffect } from 'react'

const Container = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;

  backdrop-filter: blur(3px);
  animation: modal-bg-show 0.4s;

  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

interface ILoginModal {
  isLogin: Boolean
}

const LoginModal = styled.div`
  width: 85%;
  margin: 0 auto;
  max-width: ${SIZES.maxWidth};
  border: solid 1px black;
  border-radius: 0.3rem;
  background-color: #fff;

  animation: modal-show 0.4s;
  overflow: hidden;
`

const Header = styled.div`
  position: relative;
  padding: 10px;
  background-color: #eceff1;
  font-weight: 700;
`

const HeaderIcon = styled.img`
  width: 15px;
  padding: 5px 5px 0px 7px;
`
const Span = styled.span``

const CompanyImg = styled.img``

const KakaoLoginImg = styled.img`
  margin: 10px 0px;
`
const Main = styled.div`
  padding: 12px;
  margin: 0px;
  text-align: center;
  border-bottom: 1px solid #eceff1;
`

export const Login = () => {
  const [isLogin, setLogin] = useState(false)

  const success = (props: any) => {
    console.log(props)
    localStorage.setItem('login', 'login')
    setLogin(true)
  }

  useEffect(() => {
    const checkLogin = () => {
      if (localStorage.getItem('login') == 'login') {
        setLogin(true)
      }
    }

    checkLogin()
  }, [])

  const token = '3d589cb30dd93b4cd8f90a7dbd76c5cf'
  return (
    <>
      {isLogin ? undefined : (
        <Container>
          <LoginModal>
            <Header>
              <HeaderIcon src={antHead} alt="🐜" />
              로그인
            </Header>
            <Main>
              <CompanyImg src={antsLogin} alt="개미도 때론 돈을 번다" />
              <Line />
              <KakaoLogin
                token={token}
                onSuccess={(props) => success(props)}
                onFail={console.error}
                onLogout={console.info}
                render={({ onClick }) => {
                  return (
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        onClick()
                      }}
                    >
                      <KakaoLoginImg src={kakaoLoginImage} alt="kakao login" />
                    </a>
                  )
                }}
              />
            </Main>
          </LoginModal>
        </Container>
      )}
    </>
  )
}
