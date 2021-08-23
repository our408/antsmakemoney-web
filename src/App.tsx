import { Router } from './route/Router'
import { Login } from '@components'

function App() {
  return (
    <>
      <Login loginDefault={false} />
      <Router />
    </>
  )
}

export default App
