import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import { ChartThisWeek, ChartLastWeek } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Route path={'/thisweek'} component={ChartThisWeek} />
      <Route path={'/lastweek'} component={ChartLastWeek} />

      <Redirect path="/" to="/thisweek" />
    </BrowserRouter>
  )
}

export default App
