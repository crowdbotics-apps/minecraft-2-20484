import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps104485Navigator from '../features/Maps104485/navigator';
import Tutorial104484Navigator from '../features/Tutorial104484/navigator';
import Messaging104483Navigator from '../features/Messaging104483/navigator';
import BlankScreen0104482Navigator from '../features/BlankScreen0104482/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps104485: { screen: Maps104485Navigator },
Tutorial104484: { screen: Tutorial104484Navigator },
Messaging104483: { screen: Messaging104483Navigator },
BlankScreen0104482: { screen: BlankScreen0104482Navigator },

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
