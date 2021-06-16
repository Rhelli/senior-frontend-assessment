import { 
  FETCH_VEHICLES_REQUEST, FETCH_VEHICLES_SUCCESS,
  FETCH_VEHICLES_ERROR, FETCH_SINGLE_VEHICLE,
} from './vehiclesTypes';

const initialState = {
  loading: false,
  vehicles: {},
  singleVehicle: [],
  error: '',
};

const vehiclesReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_VEHICLES_REQUEST: return {
      ...state,
      loading: true,
    };

    case FETCH_VEHICLES_SUCCESS: return {
      ...state,
      loading: false,
      vehicles: action.payload,
      error: '',
    };

    case FETCH_VEHICLES_ERROR: return {
      ...state,
      loading: false,
      vehicles: {},
      error: action.payload
    };

    case FETCH_SINGLE_VEHICLE: return {
      ...state,
      loading: false,
      singleVehicle: action.payload,
      error: '',
    };

    default: return state;
  }
}

export default vehiclesReducer;