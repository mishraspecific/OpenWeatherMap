import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../../components/Card';
import styles from './styles';

const CityListItem = ({ weaatherInfo, navigateTo }) => {
  const { name, weather, main } = weaatherInfo;
  return (
    <Card style={styles.listRow}>
      <View style={{ flexDirection: 'column', flex: 0.9 }}>
        <Text style={styles.citynameTextStyle}>{name}</Text>
        <Text style={styles.weatherText}>{`${Math.floor(main.temp)}° ${
          weather[0].description
        }`}</Text>
      </View>
      <Text
        style={styles.arrowTextStyle}
        onPress={() => navigateTo(weaatherInfo)}>
        {'->'}
      </Text>
    </Card>
  );
};

export default CityListItem;
