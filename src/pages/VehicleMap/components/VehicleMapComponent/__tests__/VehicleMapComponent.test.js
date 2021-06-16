import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import VehicleMapComponent from '../VehicleMapComponent';

Enzyme.configure({ adapter: new Adapter() });

const mockData = {
  1: [
    {
        "lng": -0.1204129,
        "lat": 51.5176398,
        "timeStamp": "01/01/2021 12:23"
    },
    {
        "lng": -0.1229235,
        "lat": 51.5171991,
        "timeStamp": "01/01/2021 12:23"
    },
    {
        "lng": -0.123138,
        "lat": 51.5172926,
        "timeStamp": "01/01/2021 12:23"
    },
  ]
}

const vehicleMapComponent = (<VehicleMapComponent mockData={mockData} />);

describe('It matches the previous working version of the vehicle map component', () => {
  it('Matches the previous snapshot of the vehicle map component', () => {
    const tree = renderer.create(vehicleMapComponent);
    expect(tree).toMatchSnapshot();
  });
});