import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../screens/HomeScreen';
import HakkimizdaScreen from '../../screens/HakkimizdaScreen';

const TabNavigator = createBottomTabNavigator();

const Navigation = () => {

  return (
    <NavigationContainer>
      <TabNavigator.Navigator>
        <TabNavigator.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }}></TabNavigator.Screen>
        <TabNavigator.Screen name='HakkimizdaScreen' component={HakkimizdaScreen} options={{ headerShown: false }}></TabNavigator.Screen>
      </TabNavigator.Navigator>
    </NavigationContainer>
  )


}

export default Navigation