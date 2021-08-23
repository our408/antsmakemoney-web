import { css, createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

import { default as AppleSDGothicNeoM } from './fonts/AppleSDGothicNeoM.ttf'
import { default as AppleSDGothicNeoB } from './fonts/AppleSDGothicNeoB.ttf'
import { default as NotoSansKRMedium } from './fonts/NotoSansKR-Medium.otf'
import { default as DungGeunMo } from './fonts/DungGeunMo.ttf'
import { default as NeoDungGeunMo } from './fonts/neodgm_pro.ttf'

//@import url(${fonts})
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: AppleSDGothicNeo;
    src: url(${AppleSDGothicNeoM}) format('opentype');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }

  @font-face {
    font-family: DungGeunMo;
    src: url(${DungGeunMo}) format('opentype');
  }

  @font-face {
    font-family: NeoDungGeunMo;
    src: url(${NeoDungGeunMo}) format('opentype');
  }


  @font-face {
    font-family: NotoSansKR;
    src: url(${NotoSansKRMedium}) format('opentype');
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
  }

  #root, html, body {
      font-family: NeoDungGeunMo, AppleSDGothicNeo, NotoSansKR;
      margin: 0 auto;
      max-width: 360px;
      background-color: #ffffff;
      height:100%;

  }

  p {
    margin: 0;
  }

  
`
export default GlobalStyle

export const Line = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #f2f2f2;
`

interface IEmpty {
  height?: number
}
export const Empty = styled.div<IEmpty>`
  width: 100%;
  height: ${(props) => (props.height ? `${props.height}px` : `50px`)};
  box-sizing: border-box;
`
