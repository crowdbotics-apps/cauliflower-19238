import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignUp1489886Navigator from '../features/SignUp1489886/navigator';
import BlankScreen185424Navigator from '../features/BlankScreen185424/navigator';
import BlankScreen285423Navigator from '../features/BlankScreen285423/navigator';
import BlankScreen185421Navigator from '../features/BlankScreen185421/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
