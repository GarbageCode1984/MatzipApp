import {colors} from '@/constants';
import {Children, PropsWithChildren, ReactNode} from 'react';
import {PressableProps} from 'react-native';
import {Modal, ModalProps, Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';

interface OptionMainProps extends ModalProps {
    children: ReactNode;
    isVisible: boolean;
    hideOption: () => void;
    animationType?: ModalProps['animationType'];
}

function OptionsMain({children, isVisible, hideOption, animationType = 'slide', ...props}: OptionMainProps) {
    return (
        <Modal
            visible={isVisible}
            transparent={true}
            animationType={animationType}
            onRequestClose={hideOption}
            {...props}>
            <SafeAreaView style={styles.optionBackground}>{children}</SafeAreaView>
        </Modal>
    );
}

function Container({children}: PropsWithChildren) {
    return <View style={styles.optionContainer}>{children}</View>;
}

interface ButtonProps extends PressableProps {
    children: ReactNode;
    isDanger: boolean;
}

function Button({children, isDanger = false, ...props}: ButtonProps) {
    return (
        <Pressable style={({pressed}) => [pressed && styles.optionButtonPressed, styles.optionButton]} {...props}>
            <Text style={[styles.optionText, isDanger && styles.dangerText]}>{children}</Text>
        </Pressable>
    );
}

function Title({children}: PropsWithChildren) {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    optionBackground: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0 0 0 / 0.5)',
    },
    optionContainer: {
        borderRadius: 15,
        marginHorizontal: 10,
        marginBottom: 10,
        backgroundColor: colors.GRAY_100,
        overflow: 'hidden',
    },
    optionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        gap: 5,
    },
    optionButtonPressed: {
        backgroundColor: colors.GRAY_200,
    },
    optionText: {
        fontSize: 17,
        color: colors.BLUE_500,
        fontWeight: '500',
    },
    dangerText: {
        color: colors.RED_500,
    },
    titleContainer: {},
    titleText: {},
});
