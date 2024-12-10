import {colors} from '@/constants';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface ImageInputProps {
    onChange: () => void;
}

function ImageInput({onChange}: ImageInputProps) {
    return (
        <Pressable onPress={onChange}>
            <Ionicons name={'camera-outline'} size={20} color={colors.GRAY_500} />
            <Text>사진 추가</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({});

export default ImageInput;
