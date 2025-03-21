import {colors} from '@/constants';
import {ImageUri} from '@/types';
import React from 'react';
import {Dimensions, Platform, StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Image} from 'react-native-reanimated/lib/typescript/Animated';

interface ImageCarouselProps {
    images: ImageUri[];
}

const deviceWidth = Dimensions.get('window').width;

function ImageCarousel({images}: ImageCarouselProps) {
    return (
        <View style={styles.container}>
            <FlatList
                data={images}
                renderItem={({item}) => (
                    <View style={{width: deviceWidth}}>
                        <Image
                            style={styles.image}
                            source={{
                                uri: `${Platform.OS === 'ios' ? 'http://localhost:3030' : 'http://10.0.2.2:3030'}/${
                                    item.uri
                                }`,
                            }}
                        />
                    </View>
                )}
                keyExtractor={(item) => String(item.id)}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.WHITE,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default ImageCarousel;
