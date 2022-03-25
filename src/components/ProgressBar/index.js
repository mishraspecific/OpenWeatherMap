import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default ProgressBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{'Fetching weather data'}</Text>
      <ActivityIndicator style={{ alignSelf: 'center' }} size={100} />
      <Text style={styles.text}>{'Please wait'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 20,
  },
  text: {
    marginVertical: 20,
    alignSelf: 'center',
    fontSize: 20,
    color: '#231F20',
  },
});
