import React from 'react';
import VehicleMapComponent from './components/VehicleMapComponent/VehicleMapComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { mockData } from '../../assets/data/Mockdata';
import styles from './VehicleMapContainer.module.scss';

const VehicleMapContainer = () => (
  <main>
    <div className={styles.vehicleMapContainer}>
      <div className={styles.vehicleMapTitleOptionsBar}>
        <h2>Vehicle Map</h2>
        <FontAwesomeIcon icon={faEllipsisV} />
      </div>
      <div className={styles.vehicleMapInnerContainer}>
        <VehicleMapComponent mockData={mockData} />
      </div>
    </div>
  </main>
);

export default VehicleMapContainer;
