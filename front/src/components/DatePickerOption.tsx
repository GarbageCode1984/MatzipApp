import React from 'react';
import {Modal, SafeAreaView, StyleSheet} from 'react-native';

interface DatePickerOptionsProps {
    isVisible: boolean;
}

function DatePickerOption({isVisible}: DatePickerOptionsProps) {
    return (
        <Modal visible={isVisible} transparent animationType="slide">
            <SafeAreaView style={styles.optionBackground}></SafeAreaView>
        </Modal>
    );
}

const styles = StyleSheet.create({
    optionBackground: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0 / 0.5)',
    },
});

export default DatePickerOption;
