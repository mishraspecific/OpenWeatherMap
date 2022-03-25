import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const CustomButton = ({ onPress, title, size, backgroundColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.appButtonContainer, backgroundColor && { backgroundColor }]}>
    <Text style={[styles.appButtonText, size === 'sm' && { fontSize: 14 }]}>
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonBackground: {
    width: '80%',
    height: 50,
    marginTop: 50,
    resizeMode: 'contain',
  },
  appButtonContainer: {
    width: '70%',
    justifyContent: 'center',
    alignSelf: 'center',
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
