import useGetInfinitePosts from '@/hooks/queries/useGetInfinitePosts';
import React from 'react';
import {FlatList} from 'react-native';
import FeedItem from './FeedItem';

function FeedList() {
    const {data: posts} = useGetInfinitePosts();

    return (
        <FlatList
            data={posts?.pages.flat()}
            renderItem={({item}) => <FeedItem post={item} />}
            keyExtractor={(item) => String(item.id)}
            numColumns={2}
        />
    );
}

export default FeedList;
