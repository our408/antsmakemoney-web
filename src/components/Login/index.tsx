import styled from 'styled-components'
import KakaoLogin from 'react-kakao-login'
import { SIZES } from '@resources/sizes'
import { Line } from '@components'
import {
  antHead,
  kakaoLogin as kakaoLoginImage,
  antsLogin,
} from '@resources/img'
import { useState, useEffect } from 'react'
import { createUser, getUser } from '@data/UserAPI'

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

interface ILogin {
  loginDefault: Boolean
}

export const Login = (props: ILogin) => {
  const [LoginUI, setLoginUI] = useState(props.loginDefault)

  const success = (props: any) => {
    const profile = props['profile']

    const nickname = profile['properties']['nickname']
    const email = profile['kakao_account']['email']
    const age = profile['kakao_account']['age_range']
    const gender = profile['kakao_account']['gender']
    const oauth = 'kakao'

    const data = createUser(nickname, email, oauth, gender, age)

    data.then((data) => {
      localStorage.setItem('uid', data.uuid)
      const userData = getUser(data.uuid)

      userData.then((data) => {
        localStorage.setItem('nickname', data['nickname'])
      })
    })

    setLoginUI(false)
  }

  // 처음 들어 왔을때 localhost 확인
  useEffect(() => {
    const checkLogin = () => {
      if (localStorage.getItem('uid') == undefined) {
        // 로컬 스토리지에 uid가 없어서 로그인 UI를 보여줘야 함
        setLoginUI(true)
      } else {
        // 로컬 스토리지에 uid가 있는데, 올바른 uid 인지 검증

        const uuid = localStorage.getItem('uid')!
        const userData = getUser(uuid)
        userData.then((data) => {
          if (data['nickname']) {
            // uuid가 검증 통과
            localStorage.setItem('nickname', data['nickname'])
          } else {
            // uuid가 옳지 않은 경우 로그인 UI 보여주고 로컬스토리지 초기화
            setLoginUI(true)
            localStorage.clear()
          }
        })
      }
    }

    checkLogin()
  }, [])

  const token = '3d589cb30dd93b4cd8f90a7dbd76c5cf'
  return (
    <>
      {LoginUI ? (
        <Container>
          <LoginModal>
            <Header>
              <HeaderIcon src={antHead} alt="🐜" />
              어디서 온 개미냐
            </Header>
            <Main>
              <CompanyImg src={antsLogin} alt="개미도 때론 돈을 번다" />
              <Line />
              <KakaoLogin
                token={token}
                onSuccess={(props) => success(props)}
                onFail={() => alert('잠시 후에 다시 시도 해주세요!')}
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
      ) : undefined}
    </>
  )
}
