import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import profilescreen from '../profilescreen';
import setting from '../setting';


const Tab = createMaterialTopTabNavigator();
 
const component = () => {
    return(
        <Tab.Navigator>
          <Tab.Screen name="profile" component={profilescreen} />
          <Tab.Screen name="Settings" component={setting} />
        </Tab.Navigator>
      );
};
export default component;




