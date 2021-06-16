import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptop, faProjectDiagram, faMap, faListAlt, faPlusSquare, faChevronRight, faCogs,
  faQrcode, faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import styles from './SideMenuComponent.module.scss';

const SideMenuComponent = () => {
  const [operationMenuDropdown, setOperationMenuDropdown] = useState(true);

  const handleOperationMenuDropdown = () => {
    if (operationMenuDropdown === true) {
      setOperationMenuDropdown(false);
    } else {
      setOperationMenuDropdown(true);
    }
    return true;
  }

  return (
    <nav className={styles.sideMenuContainer}>
      <div className={styles.tracBrand}>
        <FontAwesomeIcon icon={faLaptop}/>
        <h1>TRACMOBILITY</h1>
      </div>
      <div className={styles.kpiSection}>
        <FontAwesomeIcon icon={faProjectDiagram}/>
        <h3>KPI Dashboard</h3>
      </div>
      <div className={styles.taskManagementSection}>
        <h3>Task Management</h3>
        <a href="#">
          <FontAwesomeIcon icon={faMap}/>
          <p>Task Map</p>
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faListAlt}/>
          <p>Task List</p>
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faPlusSquare}/>
          <p>Task Creation</p>
          <FontAwesomeIcon icon={faChevronRight} className={styles.taskCreationChevron} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faCogs} />
          <p>Rule Setting</p>
        </a>
      </div>
      <div className={styles.operationCenterSection}>
        <h3>Operation Center</h3>
        <div className={styles.operationMenuContainer}>
          {
            operationMenuDropdown ? (
              <>
                <div className={styles.operationButtonContainer}>
                  <FontAwesomeIcon icon={faQrcode}/>
                  <button onClick={handleOperationMenuDropdown} className={styles.operationDropdown}>Vehicle Information</button>
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
                <div className={styles.operationMenuDropdown}>
                  <a href="/">Vehicle List</a>
                  <a href="/vehicle-map">Vehicle Map</a>
                  <a href="#">Vehicle Search</a>
                </div>
              </>
            ) : (
              <div className={styles.operationButtonContainer}>
                <FontAwesomeIcon icon={faQrcode}/>
                <button onClick={handleOperationMenuDropdown} className={styles.operationDropdown}>Vehicle Information</button>
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            )
          }
        </div>
      </div>
    </nav>
  );
};

export default SideMenuComponent;
