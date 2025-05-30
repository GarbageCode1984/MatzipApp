import ImageCarousel from '@/components/common/ImageCarousel';
import {feedNavigations} from '@/constants';
import {FeedStackParamList} from '@/navigations/stack/FeedStackNavigator';
import useDetailStore from '@/store/useDetailPostStore';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';

type ImageZoomScreenProps = StackScreenProps<FeedStackParamList, typeof feedNavigations.IMAGE_ZOOM>;

function ImageZoomScreen({route}: ImageZoomScreenProps) {
    const {index} = route.params;
    const {detailPost} = useDetailStore();

    return <ImageCarousel images={detailPost?.images ?? []} pressedIndex={index} />;
}

export default ImageZoomScreen;
