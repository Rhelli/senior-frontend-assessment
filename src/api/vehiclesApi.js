import {
  fetchVehiclesRequest, fetchVehiclesSuccess, fetchVehiclesError,
} from '../state/vehicles/vehiclesActions';

const fetchVehiclesApiRequest = () => dispatch => {
  dispatch(fetchVehiclesRequest);
  fetch(`https://console-api.tracmobility.com/test/vehicles?page=0&size=10`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(data => data.json())
    .then(data => {
      dispatch(fetchVehiclesSuccess(data));
    })
    .catch(error => {
      dispatch(fetchVehiclesError(error));
    });
};

export default fetchVehiclesApiRequest;