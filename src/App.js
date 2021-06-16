import Routes from './routes';
import styles from './App.module.scss';
import SideMenuComponent from './common/SideMenu/SideMenuComponent';
import TopNavigationComponent from './common/TopNavigation/TopNavigation';

const App = () => {
  return (
    <div className={styles.appContainer}>
      <div className={styles.sideMenuContainer}>
        <SideMenuComponent />
      </div>
      <div className={styles.topBarAndRoutesContainer}>
        <TopNavigationComponent />
        <Routes />
      </div>
    </div>
  );
}

export default App;
