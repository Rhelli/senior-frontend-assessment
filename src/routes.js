import { BrowserRouter, Switch, Route } from 'react-router-dom';
import VehiclesListContainer from './pages/VehicleList/VehicleListContainer';
import VehicleMapContainer from './pages/VehicleMap/VehicleMapContainer';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={VehiclesListContainer} />
      <Route exact path='/vehicle-map' component={VehicleMapContainer} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
