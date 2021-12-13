import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'

import { budda } from '@resources/img'
import banya from '../../resources/audio/banya.mp3'

const Budda = styled.img`
  width: 360px;
`

const Container = styled.main<IBudda>`
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: #99a0a3;

  opacity: ${({ opacity }) => opacity};
  transition: opacity 7000ms, visibility 7000ms;
`

interface IBudda {
  opacity: number
}

export const Calm = () => {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1)
    }, 400)
  }, [])

  return (
    <Container opacity={opacity}>
      <Marquee
        style={{
          backgroundColor: '#99a0a3',
        }}
        speed={45}
        gradient={false}
        delay={5.3}
      >
        <p
          style={{
            fontSize: 16,
          }}
        >
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          {lyrics1}
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          {lyrics2}
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          {lyrics3}
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          {lyrics4}
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          {lyrics5}
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          {lyrics6}
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          {lyrics7}
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          {lyrics8}
          {lyrics9}
          {lyrics10}
        </p>
      </Marquee>
      <Budda src={budda} alt="budda" />
      <audio id="banyaPlayer" src={banya} autoPlay></audio>
    </Container>
  )
}

const lyrics1 = '마하반야바라밀다심경 관 자재보살 행심'
const lyrics2 =
  '반야바라밀다시 조견오온개공도 일체고액 사리자 색불이공 공불이색  색즉시공 공즉시색'
const lyrics3 =
  '수상행식 역부여시 사리자 시 제법공상 불생불멸 불구부정 부증불감 시고'
const lyrics4 =
  '공중무색 무수상행식 무안이비설신의 무색성향미촉법 무안계 내지 무의식계'
const lyrics5 =
  '무무명 역무무명진 내지 무노사 역무노사진 무고집멸도 무지역무득 이무소득고'
const lyrics6 =
  '보리살타 의반야바라밀다  고심무가애 무가애고 무유공포 원리전도몽상 구경열반'
const lyrics7 =
  '삼세제불 의반야바라밀다 고득아뇩다라삼먁삼보리 고지반야바라밀다 시대신주 시대명주 시무상주 시무등등주 능제일체고 진실불허 고설 반야바라밀다주'
const lyrics8 =
  '즉설주왈 아제 아제 바라아제 바라승아제 모지 사바하 아제 아제 바라아제 바라승아제 모지 사바하'
const lyrics9 = '아제 아제 바라아제 바라승아제 모지'
const lyrics10 = '사바하'

const blank = '&emsp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;'
