import React, {useState} from 'react';
import {Image, View, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import {openCamera, openPicker} from 'react-native-image-crop-picker';
import {colors} from '../utils/colors';
import CustomText from './CustomText';

interface UploadPhotoProps {
  renderButton?: (openModal: () => void) => React.ReactNode;
  imageContainer: any; // Add the correct type for imageContainer
  options?: any; // Add the correct type for options
  image?: string;
  placeholder?: string;
  disabled?: boolean;
  iconStyle?: any; // Add the correct type for iconStyle
  iconColor?: string;
  handleChange: (image: string) => void;
}

const CamraModal: React.FC<UploadPhotoProps> = props => {
  const [image, setImage] = useState<string>('');
  const [imageModal, setImageModal] = useState<boolean>(false);

  const takePhotoFromCamera = () => {
    try {
      const options = {
        mediaType: 'photo',
        quality: 1,
        cropping: true,
        ...props.options,
      };
      setImageModal(false);
      setTimeout(async () => {
        const result = await openCamera(options);
        if (result) {
          setImage(result);
          props.handleChange(result);
          // console.log('takePhotoFromCamera', result);
        }
      }, 500);
    } catch (error) {
      console.log('takePhotoFromCamera error', error);
    }
  };

  const takePhotoFromLibrary = async () => {
    try {
      const options = {
        mediaType: 'photo',
        cropping: true,
        quality: 0.8,
        ...props.options,
      };
      setImageModal(false);
      setTimeout(async () => {
        const result = await openPicker(options);
        if (result) {
          setImage(result);
          props.handleChange(result);
        }
      }, 1000);
    } catch (error) {
      console.log('takePhotoFromLibrary error', error);
    }
  };

  const ModalIcons: React.FC<{
    source: string;
    title: string;
    onPress: () => void;
  }> = ({source, title, onPress}) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.modalIcon}>
          <CustomText label={source} />
        </View>
        <CustomText label={title} color={colors.black} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={!props.renderButton && styles.container}>
      {!props.renderButton ? (
        <>
          <View style={props.imageContainer}>
            <Image
              source={
                image
                  ? {uri: image}
                  : props.image
                  ? {uri: props.image}
                  : props.placeholder || {
                      uri: 'https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png',
                    }
              }
              style={styles.image}
            />
          </View>
          {!props.disabled && (
            <TouchableOpacity
              activeOpacity={0.6}
              style={[styles.iconStyle, props.iconStyle]}
              onPress={() => setImageModal(true)}>
              {/* <Entypo
                name="camera"
                color={props.iconColor || 'black'}
                size={17}
              /> */}
            </TouchableOpacity>
          )}
        </>
      ) : (
        props.renderButton(() => setImageModal(true))
      )}
      <Modal transparent={true} visible={imageModal} animationType="slide">
        <TouchableOpacity
          style={styles.headModalContainer}
          onPress={() => setImageModal(false)}
          activeOpacity={0.0}>
          <View style={styles.modalContainer}>
            <CustomText
              label="Choose Picture From"
              fontSize={20}
              color={colors.black}
              alignSelf="center"
            />
            <View style={styles.modalIconContainer}>
              <ModalIcons
                source={'image'}
                title="Phone Storage"
                onPress={takePhotoFromLibrary}
              />
              <ModalIcons
                source={'camera'}
                title="Open Camera"
                onPress={takePhotoFromCamera}
              />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default CamraModal;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  iconStyle: {
    position: 'absolute',
    bottom: 15,
    right: 5,
    borderRadius: 50,
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 5,
  },
  container: {
    alignSelf: 'center',
  },
  headModalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalContainer: {
    height: '26%',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: '5%',
    justifyContent: 'space-between',
  },
  modalIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
