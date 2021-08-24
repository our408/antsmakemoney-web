import { Router } from './route/Router'
import { Login, Nav } from '@components'

function App() {
  return (
    <>
      <Login loginDefault={true} />
      <Router />
    </>
  )
}

export default App
