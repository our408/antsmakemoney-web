import { useState, useEffect } from 'react'
import { Router } from './route/Router'
import { Login, Loading, Header, Footer, Nav } from '@components'
import { InitData } from '@data/Init'

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    InitData()
    setTimeout(() => {
      setLoading(true)
    }, 800)
  }, [])

  const LoadingUI = <Loading />
  const PageUI = (
    <>
      <Header />
      <Login loginDefault={false} />
      <Router />
    </>
  )

  return <>{loading ? PageUI : LoadingUI}</>
}

export default App
