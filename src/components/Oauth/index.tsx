import { GoogleLogin as GL } from 'react-google-login'

export const GoogleLoging = () => {
  const responseGoogle = (response: any) => {
    console.log(response)
  }

  return (
    <GL
      clientId="977453048989-a01do89ggpguo490jnnfueomu0bdkhes.apps.googleusercontent.com"
      buttonText="구글로 회원가입/로그인 하기"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      className="login"
      cookiePolicy={'single_host_origin'}
    />
  )
}
