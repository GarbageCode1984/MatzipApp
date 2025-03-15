import React from 'react';
import {Alert, StyleSheet} from 'react-native';
import {CompoundOption} from '../common/CompoundOption';
import useMutateDeletePost from '@/hooks/useMutateDeletePost';
import useDetailStore from '@/store/useDetailPostStore';
import {FeedStackParamList} from '@/navigations/stack/FeedStackNavigator';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {alerts, feedNavigations} from '@/constants';

interface FeedDetailOptionProps {
    isVisible: boolean;
    hideOption: () => void;
}

function FeedDetailOption({isVisible, hideOption}: FeedDetailOptionProps) {
    const navigation = useNavigation<StackNavigationProp<FeedStackParamList>>();
    const deletePost = useMutateDeletePost();
    const {detailPost} = useDetailStore();

    const handleDeletePost = () => {
        if (!detailPost) {
            return;
        }

        Alert.alert(alerts.DELETE_POST.TITLE, alerts.DELETE_POST.DESCRIPTION, [
            {
                text: '삭제',
                onPress: () => {
                    deletePost.mutate(detailPost.id, {
                        onSuccess: () => {
                            hideOption();
                            navigation.goBack();
                        },
                    });
                },
                style: 'destructive',
            },
            {
                text: '취소',
                style: 'cancel',
            },
        ]);
    };

    const handleEditPost = () => {
        if (!detailPost) {
            return;
        }

        navigation.navigate(feedNavigations.EDIT_POST, {
            location: {
                latitude: detailPost.latitude,
                longitude: detailPost.longitude,
            },
        });
        hideOption();
    };

    return (
        <CompoundOption isVisible={isVisible} hideOption={hideOption}>
            <CompoundOption.backgorund>
                <CompoundOption.Container>
                    <CompoundOption.Button isDanger onPress={handleDeletePost}>
                        삭제하기
                    </CompoundOption.Button>
                    <CompoundOption.Divider />
                    <CompoundOption.Button onPress={handleEditPost}>수정하기</CompoundOption.Button>
                </CompoundOption.Container>
                <CompoundOption.Container>
                    <CompoundOption.Button onPress={hideOption}>취소하기</CompoundOption.Button>
                </CompoundOption.Container>
            </CompoundOption.backgorund>
        </CompoundOption>
    );
}

const styles = StyleSheet.create({});

export default FeedDetailOption;
