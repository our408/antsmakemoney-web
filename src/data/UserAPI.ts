import axios from 'axios'

export const createUser = async (
  nickname: string,
  email: string,
  oauth: string,
  gender?: string,
  age?: string
) => {
  const url = `https://api.408.co.kr/user/`
  const body = {
    nickname: nickname,
    email: email,
    oauth: oauth,
    gender: gender,
    age: age,
  }

  const response = await axios.post(url, body)

  return response.data
}

export const getUser = async (uuid: string) => {
  const url = `https://api.408.co.kr/user/me`

  const response = await axios.get(url, { headers: { UID: uuid } })

  return response.data
}

export const getUserAnswer = async (uuid: string) => {
  const url = `https://api.408.co.kr/user/answer`

  const response = await axios.get(url, { headers: { UID: uuid } })

  return response.data
}
