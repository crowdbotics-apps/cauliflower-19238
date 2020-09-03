import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Dashboard11396901Navigator from '../features/Dashboard11396901/navigator';
import BlankScreen1196900Navigator from '../features/BlankScreen1196900/navigator';
import BlankScreen1092347Navigator from '../features/BlankScreen1092347/navigator';
import BlankScreen989890Navigator from '../features/BlankScreen989890/navigator';
import BlankScreen889889Navigator from '../features/BlankScreen889889/navigator';
import BlankScreen789888Navigator from '../features/BlankScreen789888/navigator';
import SignIn2389887Navigator from '../features/SignIn2389887/navigator';
import SignUp1489886Navigator from '../features/SignUp1489886/navigator';
import BlankScreen185424Navigator from '../features/BlankScreen185424/navigator';
import BlankScreen285423Navigator from '../features/BlankScreen285423/navigator';
import BlankScreen185421Navigator from '../features/BlankScreen185421/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Dashboard11396901: { screen: Dashboard11396901Navigator },
BlankScreen1196900: { screen: BlankScreen1196900Navigator },
BlankScreen1092347: { screen: BlankScreen1092347Navigator },
BlankScreen989890: { screen: BlankScreen989890Navigator },
BlankScreen889889: { screen: BlankScreen889889Navigator },
BlankScreen789888: { screen: BlankScreen789888Navigator },
SignIn2389887: { screen: SignIn2389887Navigator },
SignUp1489886: { screen: SignUp1489886Navigator },
BlankScreen185424: { screen: BlankScreen185424Navigator },
BlankScreen285423: { screen: BlankScreen285423Navigator },
BlankScreen185421: { screen: BlankScreen185421Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
