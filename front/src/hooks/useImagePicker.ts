import {getFormDataImages} from '@/utils';
import ImagePicker from 'react-native-image-crop-picker';
import useMutateImages from './queries/useMutateImages';

function useImagePicker() {
    const uploadImages = useMutateImages();

    const handleChange = () => {
        ImagePicker.openPicker({
            mediaType: 'photo',
            multiple: true,
            includeBase64: true,
            maxFiles: 5,
            cropperChooseText: '완료',
            cropperCancelText: '취소',
        }).then((images) => {
            const formData = getFormDataImages(images);

            uploadImages.mutate(formData);
        });
    };
}

export default useImagePicker;
