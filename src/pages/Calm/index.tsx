import styled from 'styled-components'
import React, { useEffect, useState, useRef } from 'react'

import { budda } from '@resources/img'
import { budda_ani } from '@resources/img'
import { playButton } from '@resources/img'
import banya from '../../resources/audio/banya.mp3'

const Budda = styled.img<IBudda>`
  width: 360px;
  opacity: ${({ opacity }) => opacity};
  transition: opacity 5000ms, visibility 5000ms;
`

const PlayButton = styled.img<IBudda>`
  width: 30px;
  opacity: ${({ opacity }) => opacity};
  transition: opacity 5000ms, visibility 5000ms;
`

const Container = styled.main`
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
`

interface IBudda {
  opacity: number
}

export const Calm = () => {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1)
    }, 300)
  }, [])

  const audioPlay = () => {
    const banyaPlayer = document.getElementById(
      'banyaPlayer'
    ) as HTMLAudioElement

    if (banyaPlayer) {
      banyaPlayer.play()
    }
  }

  return (
    <Container>
      <div>
        <Budda src={budda} opacity={opacity} alt="budda" />

        <div style={{ textAlign: 'center' }}>
          {/*
          <PlayButton
            src={playButton}
            opacity={opacity}
            alt="play"
            onClick={audioPlay}
            id="playButton"
          />
          */}
          <audio id="banyaPlayer" src={banya} autoPlay></audio>
        </div>
      </div>
    </Container>
  )
}
