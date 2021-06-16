import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import VehicleTableComponent from '../VehicleTableComponent';

Enzyme.configure({ adapter: new Adapter() });

const vehicles = {
  content: [
    {
      "uuid": "RTyclaTkpV",
      "createdAt": "2010-02-15T00:09:01",
      "updatedAt": "2013-01-19T03:39:46",
      "frameNo": "lpjOX",
      "qrCode": "KNaWwUOWdve",
      "status": "MAINTENANCE_PENDING",
      "lockStatus": "UNLOCKED",
      "lastSyncAt": "2017-01-07T08:25:16",
      "category": "EKICKSCOOTER",
      "discount": 0.7689465141194151,
      "graphUrl": "dIrQEcHPrTBIuosqKfVJaYdtmUlp",
      "batteryLevel": 0.5512746,
      "imei": "WgNOgmbaRybbeJkhxuSiYrYz",
      "cleanedAt": "2017-04-10T08:43:44"
    }
  ]
}

const vehicleTableComponent = (<VehicleTableComponent  vehicles={vehicles} />);

describe('It matches the previous working version of the table component', () => {
  it('Matches the previous snapshot of the Vehicle Table Component', () => {
    const tree = renderer.create(vehicleTableComponent).toJSON();
    expect(tree).toMatchSnapshot();
  });
});