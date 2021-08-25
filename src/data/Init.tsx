import { getChart } from '@data/ChartAPI'

export const InitData = () => {
  setSessionStorageChartData()
}

const setSessionStorageChartData = () => {
  const thisweekDatas = getChart('this')
  thisweekDatas.then((data) => {
    sessionStorage.setItem('this_duration', JSON.stringify(data['duration']))
    sessionStorage.setItem('this_mp', JSON.stringify(data['mostPick'])) // this most pick
    sessionStorage.setItem('this_ms', JSON.stringify(data['mostSector'])) // this most sector
  })

  const lastweekDatas = getChart('last')
  lastweekDatas.then((data) => {
    sessionStorage.setItem('last_duration', JSON.stringify(data['duration']))
    sessionStorage.setItem('last_mp', JSON.stringify(data['mostPick'])) // last most pick
    sessionStorage.setItem('last_ms', JSON.stringify(data['mostSector'])) // last most sector
  })
}
