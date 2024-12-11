import ImagePicker from 'react-native-image-crop-picker';

function useImagePicker() {
    const handleChange = () => {
        ImagePicker.openPicker({
            mediaType: 'photo',
            multiple: true,
            includeBase64: true,
            maxFiles: 5,
            cropperChooseText: '완료',
            cropperCancelText: '취소',
        }).then((items) => {
            const formData = getFormDataImages(items);
        });
    };
}

export default useImagePicker;
