import React, { useEffect, useRef, useState, useCallback } from 'react';
import { View, Text } from 'react-native';
import MapView, { Circle, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Colors } from '../../themes/Colours';
import { CustomButton } from '../CustomButton';
import styles from './styles';

const MyWeatherMapView = React.memo(({ coords, onLocationUpdate }) => {
  const mapRef = useRef(null);
  const [currentRegion, setCurrentRegion] = useState({
    latitude: 17.44497448354484,
    longitude: 78.45008444041014,
    latitudeDelta: 1,
    longitudeDelta: 1,
  });

  const { latitude, longitude } = currentRegion;

  useEffect(() => {
    onLocationUpdate(currentRegion);
  }, [currentRegion]);

  useEffect(() => {
    if (!!coords && mapRef.current) {
      setCurrentRegion({
        latitude,
        longitude,
        latitudeDelta: 1,
        longitudeDelta: 1,
      });
      mapRef.current.animateCamera({
        center: {
          latitude,
          longitude,
        },
        pitch: 0,
        heading: coords.heading,
        altitude: coords.altitude,
        zoom: 6,
      });
    }
  }, [coords]);

  const onRegionChnage = useCallback((region) => {
    setCurrentRegion({
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: 1,
      longitudeDelta: 1,
    });
    console.log(region);
  });

  const onMarkerDragEnd = useCallback(({ latitude, longitude }) => {
    setCurrentRegion({
      latitude: latitude,
      longitude: longitude,
      latitudeDelta: 1,
      longitudeDelta: 1,
    });
  });

  return (
    <View style={styles.container}>
      <MapView
        showsUserLocation={true}
        showsMyLocationButton={true}
        provider={PROVIDER_GOOGLE}
        ref={mapRef}
        initialRegion={currentRegion}
        loadingEnabled
        loadingBackgroundColor="white"
        rotateEnabled={false}
        style={styles.map}
        onRegionChangeComplete={onRegionChnage}>
        {!!coords && (
          <Marker
            draggable
            title={'Weather Point'}
            description={'Location to know weather around.'}
            coordinate={{
              latitude: currentRegion.latitude,
              longitude: currentRegion.longitude,
            }}
            onDragEnd={(e) => {
              onMarkerDragEnd(e.nativeEvent.coordinate);
            }}
          />
        )}
      </MapView>
    </View>
  );
});

export default MyWeatherMapView;
