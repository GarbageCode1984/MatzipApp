import {ResponsePost} from '@/api';
import React from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import getDateWithSeparator from '@/utils/date';

interface FeedItemProps {
    post: ResponsePost;
}

function FeedItem({post}: FeedItemProps) {
    return (
        <View style={styles.container}>
            {post.images.length > 0 && (
                <View key={post.id} style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: `${Platform.OS === 'ios' ? 'http://localhost:3030/' : 'http://10.0.2.2:3030/'}${
                                post.images[0]?.uri
                            }`,
                        }}
                        resizeMode="cover"
                    />
                </View>
            )}
            {post.images.length === 0 && (
                <View style={[styles.ImageController, styles.emptyImageContainer]}>
                    <Text style={styles.descriptionText}>No Image</Text>
                </View>
            )}

            <View style={styles.textContainer}>
                <Text style={styles.dateText}>{getDateWithSeparator(post.date, '/')}</Text>
                <Text style={styles.titleText}>{post.title}</Text>
                <Text style={styles.descriptionText}>{post.description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        marginVertical: 12,
    },
});

export default FeedItem;
