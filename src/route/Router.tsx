import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import { Nav } from '@components'
import { Chart, Mypage } from '@pages'

export const Router = () => {
  return (
    <BrowserRouter>
      <Route path={'/thisweek'}>
        <Chart week={'this'} />
      </Route>

      <Route path={'/lastweek'}>
        <Chart week={'last'} />
      </Route>

      <Route path={'/mypage'}>
        <Mypage />
      </Route>

      <Route exact path={'/'}>
        <Chart week={'this'} />
      </Route>
      <Nav />
    </BrowserRouter>
  )
}
