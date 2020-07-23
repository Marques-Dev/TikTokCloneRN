import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import EntypoIcons from 'react-native-vector-icons/Entypo';
import FeatherIcons from 'react-native-vector-icons/Feather';
import AntIcons from 'react-native-vector-icons/AntDesign';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Button from './components/Button'; 

import HomeScreen from './screens/Home';
import DiscoverScreen from './screens/Discover';

const Tabs = createBottomTabNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          style:{
            backgroundColor:'#000',
            borderTopColor: 'rgba(255,255,255,0.3)'
          },
          activeTintColor:'#fff',
        }}
      >
          <Tabs.Screen 
          name='Home' 
          component={HomeScreen}
          options={{
            title:'inicio',
            tabBarIcon: ({color,size}) => <EntypoIcons name='home' size={size} color={color} />
          }}
          />

          <Tabs.Screen 
          name='Discover' 
          component={DiscoverScreen} 
          options={{
            title:'Descobrir',
            tabBarIcon: ({color,size}) => <FeatherIcons name='search' size={size} color={color} />
          }}
          />

          <Tabs.Screen 
          name='New' 
          component={HomeScreen} 
          options={{
            title:'',
            tabBarIcon: ({color,size}) => <Button />
          }}
          />

          <Tabs.Screen 
          name='Inbox' 
          component={HomeScreen} 
          options={{
            title:'Caixa de Entrada',
            tabBarIcon: ({color,size}) => <FeatherIcons name='message-square' size={size} color={color} />
          }}
          />

          <Tabs.Screen 
          name='Profile' 
          component={HomeScreen}
          options={{
            title:'Eu',
            tabBarIcon: ({color,size}) => <AntIcons name='user' size={size} color={color} />
          }}
           />

      </Tabs.Navigator>
    </NavigationContainer>
  );
}