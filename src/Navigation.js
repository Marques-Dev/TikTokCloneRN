import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/Home';

const Tabs = createBottomTabNavigator();

export default () => {
  return (
    <Tabs.Navigator>
        <Tabs.Screen name='Home' component={HomeScreen} />
    </Tabs.Navigator>
  );
}