import axios from 'axios'

export const getChart = async (week: string = 'this') => {
  const url = `https://api.408.co.kr/stock/most?week=${week}`
  const response = await axios.get(url)

  return JSON.parse(response.data)
}
