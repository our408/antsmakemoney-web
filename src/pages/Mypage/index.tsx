import { useState, useEffect } from 'react'
import { getUser } from '@data/UserAPI'
import { Login } from 'src/components'

export const Mypage = () => {
  const [nickname, setNickname] = useState('')

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

  return (
    <>
      <div>{nickname}</div>
    </>
  )
}
