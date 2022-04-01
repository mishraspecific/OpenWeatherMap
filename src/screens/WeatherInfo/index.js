import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Card from '../../components/Card';
import { Colors } from '../../themes/Colours';

const { PRIMARY_COLOR, SECONDARY_COLOR } = Colors;

export default function WeatherInfo({ route, navigation }) {
  const { weatherDetails } = route.params;
  console.log(weatherDetails);

  const {
    main: { temp, temp_max, temp_min, humidity },
    weather: [details],
    wind: { speed },
  } = weatherDetails;

  const { icon, description } = details;

  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  useEffect(() => {
    navigation.setOptions({
      title: `${weatherDetails.name}'s Weather Report`,
    });
  }, [weatherDetails]);

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <Card>
        <View style={styles.weatherInfo}>
          <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
          <Text style={styles.textPrimary}>{temp}°C</Text>
          <Text
            style={
              styles.weatherDescription
            }>{`${description} ${temp_max}°/${temp_min}°`}</Text>
        </View>
      </Card>
      <Card>
        <View style={styles.weatherInfo}>
          <Text
            style={styles.weatherDescription}>{`Humidity : ${humidity}`}</Text>
          <Text
            style={styles.weatherDescription}>{`Wind Speed : ${speed}`}</Text>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherInfo: {
    alignItems: 'center',
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  weatherDescription: {
    textTransform: 'capitalize',
    fontSize: 20,
    color: SECONDARY_COLOR,
    fontWeight: '500',
    margin: 8,
  },
  textPrimary: {
    fontSize: 40,
    color: PRIMARY_COLOR,
  },
});
