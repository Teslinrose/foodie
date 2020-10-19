 import React,{ Component }from 'react';
 import {NavBarCustom}from './src/NavBarCustom';
import Homescreen from './src/homescreen';
import Myorders from './src/myorders';
import Wallet from './src/Wallet';
import Login from './src/Login';
import Support from './src/support';
import IPL_Challenge from './src/IPL_Challenge';
import Profile from './src/Profile';
import Challenge_Winners from './src/Challenge_Winners';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();
export default class app extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <NavBarCustom {...props} />}
         drawerStyle={{
          width:320,
        }}>
          <Drawer.Screen name="Profile" component={Profile}/> 
          <Drawer.Screen name="Home" component={Homescreen}/> 
          <Drawer.Screen name="My Orders" component={Myorders} />
          <Drawer.Screen name="Wallet" component={Wallet} />
          <Drawer.Screen name="Account" component={Login} />
          <Drawer.Screen name="Support" component={Support} />
          <Drawer.Screen name="IPL Challenge" component={IPL_Challenge} />
          <Drawer.Screen name="IPL Challenge Winners" component={Challenge_Winners} />
          </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}