import { Header } from '@components'

export const Signup = () => {
  return (
    <>
      <Header />
      <div className="signup-wrap">
        <div className="input-wrap">
          <input // 첫번째 input
            className="input-id"
            type="text"
            placeholder="아이디 (이메일) 입력"
          />
        </div>
        <div className="input-wrap">
          <input // 두번째 input
            className="input-pw"
            type="password"
            placeholder="비밀번호 (8자 이상)"
          />
        </div>
        <div className="input-wrap">
          <input className="input-nickname" type="text" placeholder="닉네임" />
        </div>
        <span className="error"></span>
        <div className="input-wrap empty">
          <span>인생에서 돈은 어떤 의미 인가요?</span>
          <input
            className="input-question"
            type="text"
            placeholder="궁금합니다"
          />
        </div>

        <div className="button-wrap empty">
          <button className="sign-up">가입하기</button>
        </div>
      </div>
    </>
  )
}
