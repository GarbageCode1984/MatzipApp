import {ImageUri} from '@/types';
import React from 'react';
import {Image, Platform, StyleSheet, View} from 'react-native';
import {Pressable, ScrollView} from 'react-native-gesture-handler';

interface PreviewImageListProps {
    imageUris: ImageUri[];
}

function PreviewImageList({imageUris}: PreviewImageListProps) {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
                {imageUris.map(({uri}, index) => {
                    return (
                        <Pressable style={styles.imageContainer}>
                            <Image
                                key={index}
                                resizeMode="cover"
                                source={{
                                    uri: `${Platform.OS === 'ios' ? 'http://localhost:3030' : 'http://10.0.2.2:3030'}`,
                                }}
                                style={styles.image}
                            />
                        </Pressable>
                    );
                })}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        gap: 15,
        width: 70,
        height: 70,
    },
    imageContainer: {
        width: 70,
        height: 70,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default PreviewImageList;
