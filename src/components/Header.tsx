import AsyncStorage from '@react-native-async-storage/async-storage';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';

import CustomImage from './CustomImage';
import CustomText from './CustomText';

import {metrics} from '../utils/metrics';
import {images} from '../assets/Images';
import {colors} from '../utils/colors';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({title}: HeaderProps) => {
  const navigation = useNavigation();
  const [profile, setProfile] = useState<any>(null);

  const getProfile = async () => {
    const res = await AsyncStorage.getItem('userData');
    setProfile(JSON.parse(res));
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.first}>
        <CustomImage
          source={images.logo}
          style={[styles.profile, {borderRadius: 100}]}
        />
      </View>
      <View style={styles.second}>
        <CustomText
          fontWeight="800"
          fontSize={45}
          label={title}
          color={colors.black}
        />
      </View>
      <View style={[styles.first, {alignItems: 'flex-end'}]}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate('Profile')}>
          {profile?.image ? (
            <Image source={{uri: profile?.image}} style={styles.profile} />
          ) : null}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: metrics.height(110),
  },
  first: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
  },
  second: {
    width: '40%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    width: metrics.width(75),
    height: metrics.width(75),
    borderRadius: 8,
    resizeMode: 'cover',
  },
});
