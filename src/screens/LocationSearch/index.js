import React from 'react';
import {SafeAreaView} from 'react-native';
import MyWeatherMapView from '../../components/Mapview';

const LocationSearch = () => {
    return (
        <SafeAreaView>
            <MyWeatherMapView />
        </SafeAreaView>
    )
}

export default LocationSearch;