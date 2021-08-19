import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import { Chart } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Route path={'/thisweek'}>
        <Chart week={'this'} />
      </Route>

      <Route path={'/lastweek'}>
        <Chart week={'last'} />
      </Route>

      <Redirect path="/" to="/thisweek" />
    </BrowserRouter>
  )
}

export default App
