import React, { useEffect } from 'react';
import { Container} from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDasboard from '../../features/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import HomePage from '../../features/home/HomePage';
import { Route, useLocation } from 'react-router-dom';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';

function App() {
  const location = useLocation();

  return (
    <>
      <Route exact path='/' component={HomePage}></Route>
      <Route path={'/(.+)'} render={() => (
        <>
          <NavBar></NavBar>
          <Container style={{marginTop: '7em'}}>
            <Route exact path='/activities' component={ActivityDasboard}></Route>
            <Route path='/activities/:id' component={ActivityDetails}></Route>
            <Route key={location.key} path={['/createActivity', '/manage/:id']} component={ActivityForm}></Route>
          </Container>
        </>
      )}></Route>
    </>
  );
}

export default observer(App);