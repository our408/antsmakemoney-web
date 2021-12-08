import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import { Nav, Header } from '@components'
import { Chart, Mypage, Calm } from '@pages'

export const Router = () => {
  return (
    <BrowserRouter>
      <Route path={'/thisweek'}>
        <Chart week={'this'} />
      </Route>

      <Route path={'/lastweek'}>
        <Chart week={'last'} />
      </Route>

      <Route path={'/calm'}>
        <Calm />
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
