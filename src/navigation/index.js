import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LocationSearch from '../screens/LocationSearch';
import CityList from '../screens/CityList';
import WeatherInfo from '../screens/WeatherInfo';
import en from '../localization/lnagauges/en';

const AppStack = createStackNavigator();

const Router = () => (
  <NavigationContainer>
    <AppStack.Navigator>
      <AppStack.Screen
        name="LocationSearch"
        component={LocationSearch}
        options={{ title: en.choose_location }}
      />
      <AppStack.Screen name="CityList" component={CityList} />
      <AppStack.Screen name="WeatherInfo" component={WeatherInfo} />
    </AppStack.Navigator>
  </NavigationContainer>
);
export default Router;
