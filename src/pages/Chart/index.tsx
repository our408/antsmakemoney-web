import { useState, useEffect } from 'react'

import styled from 'styled-components'

import { Footer, TableBody, TableHead } from '@components'
import { Empty } from '@resources/GlobalStyles'
import { TableTitle } from '../../components/Table/TableTitle'
import { table } from 'node:console'

const weeks: any = {
  this: '이번주',
  last: '저번주',
}
const descriptionPick = '애널리스트들이 가장 많이 PICK한 종목 TOP 10'
const thContentsPick = ['종목명', '현재 주가 (원)', '목표 주가 (원)']

const descriptionSector = '애널리스트들이 주목하고 있는 업종 TOP 10'
const thContentsSector = ['업종명', '업종 리포트 수', '업종 PER']

const descriptionPer = '애널리스트 PICK 중 저평가된 종목 TOP 10'
const thContentsPer = ['종목명', '동일업종 PER', 'PER']

const descriptionPrice = '애널리스트 PICK 중 크게 오를 것 같은 종목 TOP 10'
const thContentsPrice = ['종목명', '현재 주가 (원)', '목표 주가 (원)']

const TableContainer = styled.div``
const Title = styled.div`
  font-family: NeoDungGeunMo;
  margin: 6% auto;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
`

interface IChart {
  week: string
}

export const Chart = (props: IChart) => {
  //const [duration, setDuration] = useState('')
  //const [tableData, setTableData] = useState([{}])

  const week = weeks[props.week]
  const duration = JSON.parse(sessionStorage.getItem(`${props.week}_duration`)!)
  const tableData = [
    {
      data: JSON.parse(sessionStorage.getItem(`${props.week}_mp`)!),
      description: descriptionPick,
      tableHeadContent: thContentsPick,
      week: week,
    },
    {
      data: JSON.parse(sessionStorage.getItem(`${props.week}_ms`)!),
      description: descriptionSector,
      tableHeadContent: thContentsSector,
      week: week,
    },
  ]
  /*
  useEffect(() => {
    console.log('aaa')
    const fetchData = () => {
      setTableData([
        {
          data: JSON.parse(sessionStorage.getItem(`${props.week}_mp`)!),
          description: descriptionPick,
          tableHeadContent: thContentsPick,
          week: week,
        },
        {
          data: JSON.parse(sessionStorage.getItem(`${props.week}_ms`)!),
          description: descriptionSector,
          tableHeadContent: thContentsSector,
          week: week,
        },
      ])

      setDuration(JSON.parse(sessionStorage.getItem(`${props.week}_duration`)!))
    }
    fetchData()
  }, [])
  */

  return (
    <>
      <Title>REPORT PICKs</Title>

      {tableData.map((props: any, index: number) => {
        console.log('duration', duration)
        return (
          <TableContainer key={index}>
            <TableTitle
              description={props.description}
              duration={duration}
              week={week}
            />
            <TableHead content={props.tableHeadContent} />

            {props.data.map((data: any, index: number) => {
              return <TableBody data={data} key={index} />
            })}
          </TableContainer>
        )
      })}
    </>
  )
}
