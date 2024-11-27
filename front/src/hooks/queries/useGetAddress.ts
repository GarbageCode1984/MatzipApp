import {errorMessages} from '@/constants';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {LatLng} from 'react-native-maps';

function useGetAddress(location: LatLng) {
    const {latitude, longitude} = location;
    const [result, setResult] = useState('');

    useEffect(() => {
        async () => {
            try {
                const {data} = await axios.get(
                    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&result_type=street_address|route|political&key=AIzaSyABRIr2lJ4vwBIuFSqrKITzO21JMSc2xoA&language=ko`
                );
                const address = data.results.length
                    ? data.results[0].formatted_address
                    : `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;

                console.log('address', address);
                setResult(address);
            } catch (error) {
                console.log('error', error);
                setResult(errorMessages.CANNOT_GET_ADDRESS);
            }
        };
    }, [latitude, longitude]);

    return result;
}

export default useGetAddress;
