import {feedNavigations} from '@/constants';
import useGetPost from '@/hooks/queries/useGetPost';
import {FeedStackParamList} from '@/navigations/stack/FeedStackNavigator';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, View} from 'react-native';

type FeedDetailScreenProps = StackScreenProps<FeedStackParamList, typeof feedNavigations.FEED_DETAIL>;

function FeedDetailScreen({route}: FeedDetailScreenProps) {
    const {id} = route.params;
    const {data} = useGetPost(id);

    return <View></View>;
}

const styles = StyleSheet.create({});

export default FeedDetailScreen;
