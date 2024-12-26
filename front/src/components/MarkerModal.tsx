import {colors} from '@/constants';
import useGetPost from '@/hooks/queries/useGetPost';
import React from 'react';
import {Image, Modal, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CustomMarker from './CustomMarker';

interface MarkerModalProps {
    markerId: number | null;
    isVisible: boolean;
    hide: () => void;
}

function MarkerModal({markerId, isVisible, hide}: MarkerModalProps) {
    const {data: post} = useGetPost(markerId);

    return (
        <Modal visible={isVisible} transparent={true} animationType="slide">
            <SafeAreaView style={styles.optionBackground} onTouchEnd={hide}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardInner}>
                        <View style={styles.cardAlign}>
                            {post?.images.length > 0 && (
                                <View style={styles.imageContainer}>
                                    <Image
                                        style={styles.image}
                                        source={{uri: post.images[0]?.uri}}
                                        resizeMode="cover"
                                    />
                                </View>
                            )}
                            {post?.images.length === 0 && (
                                <View style={[styles.imageContainer, styles.emptyImageContainer]}>
                                    <CustomMarker color={post.color} score={post.score} />
                                </View>
                            )}
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </Modal>
    );
}

const styles = StyleSheet.create({
    optionBackground: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    cardContainer: {
        backgroundColor: colors.WHITE,
        margin: 10,
        borderRadius: 20,
        shadowColor: colors.BLACK,
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.2,
        elevation: 1,
        borderColor: colors.GRAY_500,
        borderWidth: 1.5,
    },
    cardInner: {
        padding: 20,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardAlign: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 35,
    },
    emptyImageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.GRAY_200,
        borderRadius: 35,
        borderWidth: 1,
    },
});

export default MarkerModal;
