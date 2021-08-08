import { useState, useEffect } from 'react'
import axios from 'axios'

import styled from 'styled-components'

import { Header, Loading, Login, Footer, Nav } from '@components'
import { Empty } from '@resources/GlobalStyles'
import { TableBody, ITableBody } from '../../components/Table/TableBody'
import { TableHead } from '../../components/Table/TableHead'
import { TableTitle } from '../../components/Table/TableTitle'

const url = 'https://api.408.co.kr/stock/most'

const descriptionPick = '애널리스트들이 최근 가장 많이 PICK한 종목 TOP 10'
const thContentsPick = ['종목명', '현재 주가(원)', '목표 주가 (원)']

const descriptionSector = '애널리스트들이 최근 주목하고 있는 업종 TOP 10'
const thContentsSector = ['업종명', '업종 리포트 수', '업종 PER']

const descriptionPer = '애널리스트 PICK 중 저평가된 종목 TOP 10'
const thContentsPer = ['종목명', '동일업종 PER', 'PER']

const descriptionPrice = '애널리스트 PICK 중 크게 오를 것 같은 종목 TOP 10'
const thContentsPrice = ['종목명', '현재 주가(원)', '목표 주가 (원)']

const TableContainer = styled.div``
const Title = styled.div`
  margin: 6% auto;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
`

export const Chart = () => {
  const [loading, setLoading] = useState(false)
  const [duration, setDuration] = useState('')
  const [most, setMost] = useState([{}])
  const [mostPick, setMostPick] = useState([])
  const [mostSector, setMostSector] = useState([])
  const [mostPer, setMostPer] = useState([])
  const [mostPrice, setMostPrice] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(url).then((res) => {
        const data = JSON.parse(res.data)

        setMost([
          {
            data: data['mostPick'],
            description: descriptionPick,
            tableHeadContent: thContentsPick,
          },
          {
            data: data['mostSector'],
            description: descriptionSector,
            tableHeadContent: thContentsSector,
          },
        ])
        setDuration(data['duration'])
        //setMostSector(data['mostSector'])
        //setMostPer(data['mostPer'])
        //setMostPrice(data['mostPrice'])
      })
      setTimeout(() => {
        setLoading(true)
      }, 1000)
    }
    fetchData()
  }, [])

  return (
    <>
      {loading ? (
        <>
          <Header />
          <Title>REPORT PICKs</Title>
          {most.map((props: any, index: number) => {
            return (
              <TableContainer key={index}>
                <TableTitle
                  description={props.description}
                  duration={duration}
                />
                <TableHead content={props.tableHeadContent} />
                {props.data.map((data: ITableBody, index: number) => {
                  return <TableBody data={data} key={index} />
                })}

                <Empty />
              </TableContainer>
            )
          })}
          <Footer />
          <Empty height={60} />
          <Nav />
          <Login />
        </>
      ) : (
        <Loading />
      )}
    </>
  )
}
