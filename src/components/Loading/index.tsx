import styled from 'styled-components'

import { antsGreen, antsGold, earning } from '@resources/img'
import { getRandom } from '@utils/random'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const LoadingImg = styled.img`
  margin: 0px auto;
`

const LoadingEarning = styled.img`
  margin: 10px auto;
  padding: 0px 0px 0px 10px;
`

const num = getRandom(1, 20)

export const Loading = () => {
  return (
    <Container>
      {num > 2 ? (
        <LoadingImg src={antsGreen} alt="🐜" />
      ) : (
        <LoadingImg src={antsGold} alt="🐜" />
      )}
      <LoadingEarning src={earning} alt="earning" />
    </Container>
  )
}
