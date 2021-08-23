import { useState, useEffect } from 'react'

import styled from 'styled-components'

import { getChart } from '@data/ChartAPI'

import { Header, Loading, Login, Footer, Nav } from '@components'
import { Empty } from '@resources/GlobalStyles'
import { TableBody, ITableBody } from '../../components/Table/TableBody'
import { TableHead } from '../../components/Table/TableHead'
import { TableTitle } from '../../components/Table/TableTitle'

const weeks: any = {
  this: '이번주',
  last: '저번주',
}
const descriptionPick = '애널리스트들이 가장 많이 PICK한 종목 TOP 10'
const thContentsPick = ['종목명', '현재 주가(원)', '목표 주가 (원)']

const descriptionSector = '애널리스트들이 주목하고 있는 업종 TOP 10'
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

interface IChart {
  week: string
}

export const Chart = (props: IChart) => {
  const [loading, setLoading] = useState(false)
  const [duration, setDuration] = useState('')
  const [tableData, setTableData] = useState([{}])
  const [mostPick, setMostPick] = useState([])
  const [mostSector, setMostSector] = useState([])
  const [mostPer, setMostPer] = useState([])
  const [mostPrice, setMostPrice] = useState([])

  const week = weeks[props.week]

  useEffect(() => {
    const fetchData = () => {
      const datas = getChart(props.week)
      datas.then((data) => {
        setTableData([
          {
            data: data['mostPick'],
            description: descriptionPick,
            tableHeadContent: thContentsPick,
            week: week,
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
      }, 800)
    }

    fetchData()
  }, [])

  return (
    <>
      {loading ? (
        <>
          <Header />
          <Title>REPORT PICKs</Title>
          {tableData.map((props: any, index: number) => {
            return (
              <TableContainer key={index}>
                <TableTitle
                  description={props.description}
                  duration={duration}
                  week={week}
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
          <Nav />
        </>
      ) : (
        <Loading />
      )}
    </>
  )
}
