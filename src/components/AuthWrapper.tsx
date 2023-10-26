import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import FastImage from 'react-native-fast-image';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {ReactNode} from 'react';

import CustomButton from './CustomButton';
import CameraModal from './CameraModal';
import CustomImage from './CustomImage';
import CustomText from './CustomText';
import Icons from './CustomIcon';

import {metrics} from '../utils/metrics';
import {images} from '../assets/Images';
import {colors} from '../utils/colors';

interface AuthWrapperProps {
  children: ReactNode;
  title: string;
  buttontitle: string;
  onPress: () => void;
  ShowBottomText?: boolean;
  loading?: boolean;
  disabled?: boolean;
  hideLogo?: boolean;
  bottomText?: string;
  image?: string;
  setImage?: any;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({
  children,
  title,
  buttontitle,
  onPress,
  ShowBottomText,
  disabled,
  bottomText,
  image,
  setImage,
  hideLogo,
}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        {hideLogo ? (
          <CameraModal
            handleChange={async res => {
              console.log(res);

              setImage(res?.path);
            }}
            renderButton={handleChange => (
              <TouchableOpacity
                style={styles.profileContainer}
                activeOpacity={0.6}
                onPress={handleChange}>
                {image ? (
                  <CustomImage
                    style={styles.profile}
                    resizeMode={FastImage.resizeMode.cover}
                    source={{uri: image}}
                  />
                ) : (
                  <Icons
                    name="camera"
                    family="FontAwesome"
                    color={colors.black}
                    size={metrics.width(60)}
                  />
                )}
              </TouchableOpacity>
            )}
          />
        ) : (
          <CustomImage
            resizeMode="contain"
            style={[
              styles.logo,
              {marginTop: metrics.height(hideLogo ? 80 : 100)},
            ]}
            source={images.logo}
          />
        )}

        <CustomText
          label={title}
          fontSize={35}
          fontWeight="bold"
          marginBottom={hideLogo ? 20 : 30}
          marginTop={20}
          color={colors.blue}
        />
        {children}
        <CustomButton
          disabled={disabled}
          title={buttontitle}
          fontSize={20}
          borderRadius={100}
          onPress={onPress}
          marginTop={30}
        />
      </KeyboardAwareScrollView>
      {!!ShowBottomText && (
        <View style={styles.bottomText}>
          <CustomText
            label={`${
              bottomText == 'Login' ? 'Do' : 'Don’t'
            } have an account? `}
            fontSize={16}
          />
          <CustomText
            onPress={() => navigation.navigate(bottomText)}
            label={bottomText}
            fontSize={16}
            color={colors.blue}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default AuthWrapper;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: metrics.width(20),
  },
  logo: {
    width: metrics.width(150),
    height: metrics.width(150),
    borderRadius: 100,
    alignSelf: 'center',
  },
  profileContainer: {
    width: metrics.width(150),
    height: metrics.width(150),
    borderRadius: 100,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.blue,
    marginTop: metrics.height(80),
  },
  profile: {
    width: '100%',
    height: '100%',
    // borderRadius: 100,
  },
  orContainer: {
    marginTop: metrics.height(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '50%',
    alignSelf: 'center',
  },

  bottomText: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: metrics.height(20),
  },
});
