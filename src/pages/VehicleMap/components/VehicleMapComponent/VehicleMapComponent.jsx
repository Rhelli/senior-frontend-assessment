import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid'; 
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './VehicleMapComponent.module.scss';

const VehicleMapComponent = ({ mockData }) => {
  const vehicleData = mockData[1];
  const icon = L.icon({ iconUrl: '/images/marker-icon.png' });

  return (
    <div className={styles.leafletMapContainer}>
      <MapContainer
        center={[vehicleData[0].lat, vehicleData[0].lng]}
        zoom={14}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
        />
        {
          vehicleData.map(dataPoint => {
            const point = [dataPoint.lat, dataPoint.lng]

            return (
              <Marker position={point} key={uuidv4()} icon={icon}>
                <Popup>
                  <span>Time: {dataPoint.timeStamp}</span>
                  <br/>
                  <span>LATITUDE: {dataPoint.lat}</span>
                  <br/>
                  <span>LONGITUDE: {dataPoint.lng}</span>
                </Popup>
              </Marker>
            )
          })
        }
      </MapContainer>
    </div>
  )
};

VehicleMapComponent.propTypes = {
  mockData: PropTypes.shape({
    1: PropTypes.arrayOf(
      PropTypes.shape({
        lng: PropTypes.number.isRequired,
        lat: PropTypes.number.isRequired,
        timeStamp: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};

export default VehicleMapComponent;

