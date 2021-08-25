import { useState, useEffect } from 'react'
import { Router } from './route/Router'
import { Login, Loading, Header, Footer } from '@components'
import { InitData } from '@data/Init'

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      InitData()
      setLoading(true)
    }, 800)
  }, [])

  return (
    <>
      {loading ? (
        <>
          <Header />
          <Login loginDefault={true} />
          <Router />
          <Footer />
        </>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default App
