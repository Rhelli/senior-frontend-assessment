import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,  faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import profileImg from '../../assets/img/profileImg.jpeg';
import styles from './TopNavigation.module.scss';

const TopNavigationComponent = () => (
  <header className={styles.topNavigationContainer}>
    <nav>
      <div className={styles.topNavSearch}>
        <input type="text" placeholder="Search For.." />
        <button>
          <FontAwesomeIcon icon={faSearch}/>
        </button>
      </div>
      <div className={styles.topNavProfileButtons}>
        <button>
          <FontAwesomeIcon icon={faBell} />
          <p>4</p>
        </button>
        <button>
          <FontAwesomeIcon icon={faEnvelope} />
          <p>1</p>
        </button>
      </div>
      <div className={styles.topNavUserProfile}>
        <p>Jack Niu</p>
        <img src={profileImg} alt="Jack Niu's Profile" />
      </div>
    </nav>
  </header>
);

export default TopNavigationComponent;
