import axios from 'axios';
import React, {useEffect} from 'react';
import {LatLng} from 'react-native-maps';

function useGetAddress(location: LatLng) {
    const {latitude, longitude} = location;

    useEffect(() => {
        async () => {
            const {data} = await axios.get(
                `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&result_type=street_address|route|political&key=AIzaSyABRIr2lJ4vwBIuFSqrKITzO21JMSc2xoA&language=ko`
            );

            console.log('data', data);
        };
    });
}

export default useGetAddress;
