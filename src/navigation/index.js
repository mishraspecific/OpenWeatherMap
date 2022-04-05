import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LocationSearch from '../screens/LocationSearch';
import CityList from '../screens/CityList';
import WeatherInfo from '../screens/WeatherInfo';
import en from '../localization/langauges/en';
import { ScreenNames } from './ScreenNames';

const AppStack = createStackNavigator();

const Router = () => (
  <NavigationContainer>
    <AppStack.Navigator>
      <AppStack.Screen
        name={ScreenNames.LOCATIONSEARCH}
        component={LocationSearch}
        options={{ title: en.choose_location }}
      />
      <AppStack.Screen name={ScreenNames.CITYLIST} component={CityList} />
      <AppStack.Screen name={ScreenNames.WEATHERINFO} component={WeatherInfo} />
    </AppStack.Navigator>
  </NavigationContainer>
);
export default Router;
