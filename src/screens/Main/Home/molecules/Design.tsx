import {StyleSheet, View} from 'react-native';
import React from 'react';

import {metrics} from '../../../../utils/metrics';
import {colors} from '../../../../utils/colors';

const Design: React.FC = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.first} />
      <View style={styles.second} />
      <View style={styles.first} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: metrics.height(30),
    marginBottom: metrics.height(10),
  },
  first: {
    width: metrics.width(12),
    height: metrics.width(12),
    backgroundColor: colors.placeHolder,
    borderRadius: 100,
  },
  second: {
    width: metrics.width(50),
    height: metrics.width(12),
    backgroundColor: colors.blue,
    borderRadius: 100,
    marginHorizontal: metrics.width(8),
  },
});

export default Design;
