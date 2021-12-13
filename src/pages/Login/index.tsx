import styled from 'styled-components'
import KakaoLogin from 'react-kakao-login'
import { Line, Modal } from '@components'
import {
  antHead,
  kakaoLogin as kakaoLoginImage,
  antsLogin,
} from '@resources/img'
import { useState, useEffect } from 'react'
import { createUser } from '@data/UserAPI'

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
    })

    setLoginUI(false)
  }

  // 처음 들어 왔을때 localhost 확인
  useEffect(() => {
    const checkLogin = () => {
      if (localStorage.getItem('uid') == undefined) {
        // 로컬 스토리지에 uid가 없어서 로그인 UI를 보여줘야 함
        setLoginUI(true)
      }
    }

    checkLogin()
  }, [])

  const token = '3d589cb30dd93b4cd8f90a7dbd76c5cf'

  return (
    <>
      {LoginUI ? (
        <Modal>
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
              onFail={() =>
                alert('🐜 페로몬이 이상하다.. 조금만 있다가 다시 시도해달라..!')
              }
              render={({ onClick }) => {
                return (
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      onClick()
                    }}
                  >
                    <KakaoLoginImg src={kakaoLoginImage} alt="kakao login 🐜" />
                  </a>
                )
              }}
            />
          </Main>
        </Modal>
      ) : undefined}
    </>
  )
}
