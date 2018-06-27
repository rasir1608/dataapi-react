import React from 'react'
import {
  Route,
  Switch,
  // BrowserRouter as Router,
  HashRouter as Router
} from 'react-router-dom'

// import CounterContainer from '@/containers/CounterContainer'
// import AppContainer from '@/containers/AppContainer'
import MineHome from '@/views/MineHome'
// import NoMatchContainer from '@/containers/NoMatchContainer'
// import FormContainer from '@/containers/SimpleFormContainer'
import AppView from '@/views/appView'

const routes = (
  <Router>
    <AppView>
      <Switch>
        <Route exact path="/" component={MineHome} />
        <Route exact path="/home" component={MineHome} />
        {/* <Route path='/counter' component={CounterContainer} />
        <Route path='/form' component={FormContainer} />
        <Route component={NoMatchContainer} /> */}
      </Switch>
    </AppView>
  </Router>
)

export default routes
