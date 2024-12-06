import {colors} from '@/constants';
import React from 'react';
import {Modal, Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';

interface DatePickerOptionsProps {
    isVisible: boolean;
    date: Date;
    onDateChange: (date: Date) => void;
    onConfirmDate: () => void;
}

function DatePickerOption({isVisible, date, onDateChange, onConfirmDate}: DatePickerOptionsProps) {
    return (
        <Modal visible={isVisible} transparent animationType="slide">
            <SafeAreaView style={styles.optionBackground}>
                <View style={styles.optionContainer}>
                    <DatePicker mode="date" theme={'light'} date={date} onDateChange={onDateChange} locale="ko" />
                </View>
                <View style={styles.optionContainer}>
                    <Pressable style={styles.optionButton} onPress={onConfirmDate}>
                        <Text>확인</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </Modal>
    );
}

const styles = StyleSheet.create({
    optionBackground: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0 / 0.5)',
    },
    optionContainer: {
        borderRadius: 15,
        marginHorizontal: 10,
        marginBottom: 10,
        backgroundColor: colors.GARY_100,
        overflow: 'hidden',
    },
    optionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        gap: 5,
    },
});

export default DatePickerOption;
