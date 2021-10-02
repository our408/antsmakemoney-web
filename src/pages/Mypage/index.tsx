import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getUser } from '@data/UserAPI'
import { Line, QnABox, TableBody, TableHead } from '@components'

const Introduce = styled.div`
  margin-top: 50px;
  height: 70px;
  font-size: 32px;
`

const QnA = styled.div`
  margin: 30px 0px;
`

const Favorites = styled.div`
  margin: 30px 0px;
`

const Title = styled.div`
  font-size: 24px;
`

const QnAContainer = styled.div`
  overflow: auto;
  display: flex;
`

const BoxContainer = styled.div`
  display: flex;
  padding: 5px 0px;
`

export const Mypage = () => {
  const [nickname, setNickname] = useState('')

  useEffect(() => {
    const fetchData = () => {
      const userData = getUser(localStorage.getItem('uid')!)
      userData.then((data) => {
        setNickname(data['nickname'])
      })
    }
    fetchData()
  }, [])

  const dataa = [
    {
      arrow: true,
      cell11: '현대해상',
      cell12: '25,800',
      cell13: '32,400',
      cell21: '손해보험',
      cell22: '8/20',
      cell23: '26%',
      code: '001450',
      index: 1,
    },
  ]

  const data = {
    date: '21년 8월 23일 (월)',
    content:
      '야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음',
  }

  const data2 = {
    date: '21년 8월 23일 (월)',
    content: '야식으로 떡볶이를 먹음',
  }

  const tableHeadContent = [
    '종목명',
    '즐겨 찾을 때 주가 (원)',
    '현재 주가 (원)',
  ]

  return (
    <>
      <Introduce>{nickname} 개미</Introduce>
      <Line />
      <QnA>
        <Title>나의 행복</Title>
        <QnAContainer>
          <BoxContainer>
            <QnABox date={data.date} content={data.content} />
            <QnABox date={data2.date} content={data2.content} />
            <QnABox date={data.date} content={data.content} />
            <QnABox date={data.date} content={data.content} />
            <QnABox date={data.date} content={data.content} />
            <QnABox date={data.date} content={data.content} />
            <QnABox date={data.date} content={data.content} />
            <QnABox date={data.date} content={data.content} />
          </BoxContainer>
        </QnAContainer>
      </QnA>
      <Line />
    </>
  )
}

/*
  <Favorites>
    <Title>즐겨찾는 먹이</Title>
    <TableHead content={tableHeadContent} />
    {dataa.map((data: any, index: number) => {
      return <TableBody data={data} key={index} />
    })}
  </Favorites>
*/
