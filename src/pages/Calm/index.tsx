import styled from 'styled-components'
import React, { useEffect, useState, useRef } from 'react'

import { budda } from '@resources/img'
import { budda_ani } from '@resources/img'
import banya from '../../resources/audio/banya.mp3'
import help from '../../resources/audio/Help_di.wav'
import { IDiv } from '@resources/sizes'
import { ELOOP } from 'constants'

const Budda = styled.img<IBudda>`
  width: 360px;
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

    const ele = document.getElementById('playButton')
    ele?.click()
  }, [])

  const audioPlay = () => {
    const el: HTMLAudioElement = new Audio(banya)
    el.play()
  }

  return (
    <Container>
      <button style={{ display: 'none' }} id="playButton" onClick={audioPlay}>
        banya
      </button>
      <Budda src={budda} opacity={opacity} alt="budda" />
    </Container>
  )
}
