import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { Chart } from './pages/Chart'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Chart} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
