import {
  FETCH_VEHICLES_REQUEST, FETCH_VEHICLES_SUCCESS, FETCH_VEHICLES_ERROR, FETCH_SINGLE_VEHICLE 
} from './vehiclesTypes';

export const fetchVehiclesRequest = () => ({
  type: FETCH_VEHICLES_REQUEST,
});

export const fetchVehiclesSuccess = vehicles => ({
  type: FETCH_VEHICLES_SUCCESS,
  payload: vehicles,
});

export const fetchVehiclesError = error => ({
  type: FETCH_VEHICLES_ERROR,
  payload: error,
});

export const fetchSingleVehicle = singleVehicle => ({
  type: FETCH_SINGLE_VEHICLE,
  payload: singleVehicle,
});
