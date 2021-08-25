import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getUser } from '@data/UserAPI'
import { Header, Line, QnABox, TableBody, TableHead } from '@components'

const dataa: any = [
  {
    index: '1',
    code: '034730',
    cell11: 'SK',
    cell12: '265,000',
    cell13: '357,500',
    cell21: '복합기업',
    cell22: '8/24',
    cell23: '35%',
  },
  {
    index: '2',
    code: '353200',
    pick: '2',
    cell11: '대덕전자',
    cell12: '17,900',
    cell13: '24,000',
    cell21: '전자장비와기기',
    cell22: '8/24',
    cell23: '34%',
  },
  {
    index: '2',
    code: '353200',
    pick: '2',
    cell11: '대덕전자',
    cell12: '17,900',
    cell13: '24,000',
    cell21: '전자장비와기기',
    cell22: '8/24',
    cell23: '34%',
  },
  {
    index: '2',
    code: '353200',
    pick: '2',
    cell11: '대덕전자',
    cell12: '17,900',
    cell13: '24,000',
    cell21: '전자장비와기기',
    cell22: '8/24',
    cell23: '34%',
  },
  {
    index: '2',
    code: '353200',
    pick: '2',
    cell11: '대덕전자',
    cell12: '17,900',
    cell13: '24,000',
    cell21: '전자장비와기기',
    cell22: '8/24',
    cell23: '34%',
  },
  {
    index: '2',
    code: '353200',
    pick: '2',
    cell11: '대덕전자',
    cell12: '17,900',
    cell13: '24,000',
    cell21: '전자장비와기기',
    cell22: '8/24',
    cell23: '34%',
  },
  {
    index: '2',
    code: '353200',
    pick: '2',
    cell11: '대덕전자',
    cell12: '17,900',
    cell13: '24,000',
    cell21: '전자장비와기기',
    cell22: '8/24',
    cell23: '34%',
  },
  {
    index: '2',
    code: '353200',
    pick: '2',
    cell11: '대덕전자',
    cell12: '17,900',
    cell13: '24,000',
    cell21: '전자장비와기기',
    cell22: '8/24',
    cell23: '34%',
  },
  {
    index: '2',
    code: '353200',
    pick: '2',
    cell11: '대덕전자',
    cell12: '17,900',
    cell13: '24,000',
    cell21: '전자장비와기기',
    cell22: '8/24',
    cell23: '34%',
  },
  {
    index: '2',
    code: '353200',
    pick: '2',
    cell11: '대덕전자',
    cell12: '17,900',
    cell13: '24,000',
    cell21: '전자장비와기기',
    cell22: '8/24',
    cell23: '34%',
  },
  {
    index: '2',
    code: '353200',
    pick: '2',
    cell11: '대덕전자',
    cell12: '17,900',
    cell13: '24,000',
    cell21: '전자장비와기기',
    cell22: '8/24',
    cell23: '34%',
  },
  {
    index: '2',
    code: '353200',
    pick: '2',
    cell11: '대덕전자',
    cell12: '17,900',
    cell13: '24,000',
    cell21: '전자장비와기기',
    cell22: '8/24',
    cell23: '34%',
  },
  {
    index: '2',
    code: '353200',
    pick: '2',
    cell11: '대덕전자',
    cell12: '17,900',
    cell13: '24,000',
    cell21: '전자장비와기기',
    cell22: '8/24',
    cell23: '34%',
  },
]

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
  const [nickname, setNickname] = useState('?')

  useEffect(() => {
    let nickname = localStorage.getItem('nickname')

    if (nickname == undefined) {
      const uuid = localStorage.getItem('UID')!
      const data = getUser(uuid)
      data.then((data) => {
        if (data['nickname']) {
          // uuid가 맞아서 nickname을 받을 수 있는 경우
          localStorage.setItem('ninkname', data['nickname'])
          setNickname(data['nickname'])
        } else {
          // uuid가 옳지 않은 경우 삭제함
          localStorage.removeItem('UID')
        }
      })
    } else {
      setNickname(nickname)
    }
  }, [])

  const data = {
    date: '21년 8월 23일 (월)',
    content:
      '야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음야식으로 떡볶이를 먹음',
  }

  const data2 = {
    date: '21년 8월 23일 (월)',
    content: '야식으로 떡볶이를 먹음',
  }

  const tableHeadContent = ['종목명', '', '현재 주가 (원)']

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
      <Favorites>
        <Title>즐겨찾는 먹이</Title>
        <TableHead content={tableHeadContent} />
        {dataa.map((data: any, index: number) => {
          return <TableBody data={data} key={index} />
        })}
      </Favorites>
    </>
  )
}
