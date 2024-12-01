import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {Text, View} from 'react-native-reanimated/lib/typescript/Animated';
import {colors} from '@/constants';
import {ScrollView} from 'react-native-gesture-handler';
import {MarkerColor} from '@/types';
import CustomMarker from './CustomMarker';

interface MarkerSelectorProps {
    markerColor: MarkerColor;
    onPressMarker: (color: MarkerColor) => void;
}

const categoryList: MarkerColor[] = ['RED', 'YELLOW', 'GREEN', 'BLUE', 'PURPLE'];

function MarkerSelector({markerColor, onPressMarker}: MarkerSelectorProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.markerLabel}>마커 선택</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.markerScroll}>
                    {categoryList.map((color) => {
                        return (
                            <Pressable
                                style={[styles.markerBox, markerColor === color && styles.pressedMarker]}
                                onPress={() => onPressMarker(color)}>
                                <CustomMarker color={color} />
                            </Pressable>
                        );
                    })}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.GRAY_200,
        padding: 15,
    },
    markerLabel: {
        marginBottom: 15,
        color: colors.GRAY_700,
    },
    markerScroll: {
        flexDirection: 'row',
        gap: 20,
    },
    markerBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        backgroundColor: colors.GRAY_200,
        borderRadius: 6,
    },
    pressedMarker: {
        borderWidth: 2,
        borderColor: colors.RED_500,
    },
});

export default MarkerSelector;
