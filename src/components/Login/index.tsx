import { antHead } from '@resources/img'

export const Login = () => {
  return (
    <div className="login-modal">
      <section>
        <header>
          <img className="ant-icon" src={antHead} alt="ants"></img>
          로그인
        </header>
        <div className="main">
          <div className="input-wrap">
            <input // 첫번째 input
              className="loginIn"
              type="text"
              placeholder="아이디"
            />
          </div>
          <div className="input-wrap">
            <input // 두번째 input
              className="loginInput"
              type="password"
              placeholder="비밀번호"
            />
          </div>
          <div className="input-wrap">
            <span></span>
          </div>
          <button className="sign-in">로그인하기</button>
          <button className="sign-up">계정 만들기</button>
        </div>
      </section>
    </div>
  )
}
