import React from 'react';
import { View, FlatList } from 'react-native';
import CityListItem from './CityListItem';

const CityList = ({ route, navigation }) => {
  console.log('Rendering CityList', route);

  const { cityData } = route?.params;

  const renderItem = ({ item }) => (
    <CityListItem weaatherInfo={item} navigateTo={navigateToWeatherInfo} />
  );

  const ItemDivider = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#607D8B',
        }}
      />
    );
  };

  const navigateToWeatherInfo = (item) => {
    console.log('navigateToWeatherInfo', item);
    navigation.navigate('WeatherInfo', {
      weatherDetails: item,
    });
  };
  return (
    <View style={{ flex: 1, margin: 8 }}>
      {cityData && (
        <FlatList
          data={cityData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

export default CityList;
