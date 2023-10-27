import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';

import CustomImage from './CustomImage';
import CustomText from './CustomText';
import Icons from './CustomIcon';

import {metrics} from '../utils/metrics';
import {images} from '../assets/Images';
import {colors} from '../utils/colors';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.first}>
        <Icons
          family="Ionicons"
          name="home"
          color={colors.blue}
          size={metrics.width(60)}
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
          <CustomImage source={images.logo} style={styles.profile} />
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
  },
});
