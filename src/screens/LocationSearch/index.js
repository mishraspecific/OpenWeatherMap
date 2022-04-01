import React, { useState, useEffect, useCallback, useRef } from 'react';
import { SafeAreaView, Alert, View, Text } from 'react-native';
import MyWeatherMapView from '../../components/Mapview';
import { hasLocationPermission } from '../../utils/Permissions';
import Geolocation from 'react-native-geolocation-service';
import { CustomButton } from '../../components/CustomButton';
import commonStyles from '../../themes/styles';
import useLocation from '../../services/fetchLocations';
import ProgressBar from '../../components/ProgressBar';
import en from '../../localization/lnagauges/en';
import { Colors } from '../../themes/Colours';
import styles from './styles';

const LocationSearch = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [pinnedLocation, setpinnedLocation] = useState(null);

  var currentLocation = useRef(location);

  useEffect(() => {
    getLocation();
  }, []);

  /**
   * This method get check location permission and if permission is allowed it provide
   * user current location
   * @returns
   */
  const getLocation = async () => {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      return;
    }

    Geolocation.getCurrentPosition(
      (position) => {
        setLocation(position);
        console.log(position);
      },
      (error) => {
        Alert.alert(`Code ${error.code}`, error.message);
        setLocation(null);
        console.log(error);
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        enableHighAccuracy: true,
        timeout: 30000,
        maximumAge: 60000,
      },
    );
  };

  /**
   * It is being use to fetch data conditionally when user press SEARCH button after placing
   * marker at preferred location
   */
  const { data, error, isError, isSuccess, isLoading } =
    useLocation(pinnedLocation);

  const moveToCityListScreen = () => {
    navigation.navigate('CityList', {
      cityData: data.data.list,
    });
  };

  /**
   * its get affected when weather api call give either success or error
   */
  useEffect(() => {
    if (isSuccess) {
      console.log('locationdata', data.data.list);
      moveToCityListScreen();
      setpinnedLocation(null);
    }
    if (isError) {
      Alert.alert(en.error_title, `Reason: ${error.message}`);
    }
  }, [isSuccess, isError]);

  /**
   * This callback gets called on press of SEARCH button
   */
  const onLocationSearch = useCallback(() => {
    console.log('onLocationSearch', currentLocation);
    setpinnedLocation(currentLocation);
  });

  /**
   * This callback gets called when user change marker location on map
   */
  const onLocationUpdate = useCallback((latlong) => {
    currentLocation = latlong;
    console.log('currentLocation', currentLocation);
  });

  const onModalClose = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      {isLoading ? (
        <ProgressBar />
      ) : (
        <View style={commonStyles.columnContainer}>
          <View style={styles.mapContainer}>
            <MyWeatherMapView
              onLocationUpdate={onLocationUpdate}
              coords={location?.coords || null}
            />
          </View>
          <View
            style={{
              width: '100%',
              flex: 0.2,
              height: '10%',
              backgroundColor: Colors.white,
            }}>
            <Text style={styles.textMsg}>{en.choose_location_msg}</Text>
            <CustomButton title={'Search'} onPress={onLocationSearch} />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default LocationSearch;
