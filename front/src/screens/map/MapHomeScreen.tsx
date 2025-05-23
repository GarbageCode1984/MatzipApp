import React, {useEffect, useState} from 'react';
import {Alert, Pressable, StyleSheet, View} from 'react-native';
import MapView, {Callout, LatLng, LongPressEvent, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {alerts, colors, mapNavigations, numbers} from '@/constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MapStackParamList} from '@/navigations/stack/MapStackNavigator';
import {MainDrawerParamList} from '@/navigations/drawer/MainDrawerNavigator';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import useUserLocation from '@/hooks/useUserLocation';
import usePermission from '@/hooks/usePermission';
import mapStyle from '@/style/mapStyle';
import CustomMarker from '@/components/common/CustomMarker';
import useGetMarkers from '@/hooks/queries/useGetMarkers';
import useModal from '@/hooks/useModal';
import Config from 'react-native-config';
import MarkerModal from './../../components/map/MarkerModal';
import useLocationStore from '@/store/useLocationStore';
import useMoveMapView from '@/hooks/useMoveMapView';

type Navigation = CompositeNavigationProp<
    StackNavigationProp<MapStackParamList>,
    DrawerNavigationProp<MainDrawerParamList>
>;

function MapHomeScreen() {
    const inset = useSafeAreaInsets();
    const navigation = useNavigation<Navigation>();
    const {userLocation, isUserLocationError} = useUserLocation();
    const [selectLocation, setSelectLocation] = useState<LatLng | null>();
    const [markerId, setMarkerId] = useState<number | null>(null);
    const {data: markers = []} = useGetMarkers();
    const {moveLocation} = useLocationStore();
    const markerModal = useModal();
    const {mapRef, moveMapView, handleChangeDelta} = useMoveMapView();
    usePermission('LOCATION');

    const handlePressMarker = (id: number, coordinate: LatLng) => {
        moveMapView(coordinate);
        setMarkerId(id);
        markerModal.show();
    };

    const handleLongPressMapView = ({nativeEvent}: LongPressEvent) => {
        setSelectLocation(nativeEvent.coordinate);
    };

    const handlePressAddPost = () => {
        if (!selectLocation) {
            return Alert.alert(alerts.NOT_SELECTED_LOCATION.TITLE, alerts.NOT_SELECTED_LOCATION.DESCRIPTION);
        }

        navigation.navigate(mapNavigations.ADD_POST, {
            location: selectLocation,
        });
        setSelectLocation(null);
    };

    const handlePressUserLocation = () => {
        if (isUserLocationError) {
            return;
        }

        moveMapView(userLocation);
    };

    useEffect(() => {
        moveLocation && moveMapView(moveLocation);
    }, [moveLocation]);

    return (
        <>
            <MapView
                ref={mapRef}
                style={styles.container}
                provider={PROVIDER_GOOGLE}
                showsUserLocation
                followsUserLocation
                showsMyLocationButton={false}
                customMapStyle={mapStyle}
                onLongPress={handleLongPressMapView}
                onRegionChangeComplete={handleChangeDelta}
                region={{
                    ...userLocation,
                    ...numbers.INITIAL_DELTA,
                }}>
                {markers.map(({id, color, score, ...coordinate}) => (
                    <CustomMarker
                        key={id}
                        color={color}
                        score={score}
                        coordinate={coordinate}
                        onPress={() => handlePressMarker(id, coordinate)}
                    />
                ))}
                {selectLocation && (
                    <Callout>
                        <Marker coordinate={selectLocation} />
                    </Callout>
                )}
            </MapView>
            <Pressable style={[styles.drawerButton, {top: inset.top || 20}]} onPress={() => navigation.openDrawer()}>
                <Ionicons name="menu" color={colors.WHITE} size={25} />
            </Pressable>
            <View style={styles.buttonList}>
                <Pressable style={styles.mapButton} onPress={handlePressAddPost}>
                    <MaterialIcons name="add" color={colors.WHITE} size={25} />
                </Pressable>
                <Pressable style={styles.mapButton} onPress={handlePressUserLocation}>
                    <MaterialIcons name="my-location" color={colors.WHITE} size={25} />
                </Pressable>
            </View>

            <MarkerModal markerId={markerId} isVisible={markerModal.isVisible} hide={markerModal.hide} />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerButton: {
        position: 'absolute',
        left: 0,
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: colors.PINK_700,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        shadowColor: colors.BLACK,
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.5,
        elevation: 4,
    },
    buttonList: {
        position: 'absolute',
        bottom: 30,
        right: 15,
    },
    mapButton: {
        backgroundColor: colors.PINK_700,
        marginVertical: 5,
        height: 48,
        width: 48,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        shadowColor: colors.BLACK,
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.5,
        elevation: 2,
    },
});

export default MapHomeScreen;
