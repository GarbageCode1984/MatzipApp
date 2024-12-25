import {colors} from '@/constants';
import useGetPost from '@/hooks/queries/useGetPost';
import React from 'react';
import {Modal, SafeAreaView, StyleSheet, Text, View} from 'react-native';

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
                    <Text>{post?.title}</Text>
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
    },
});

export default MarkerModal;
