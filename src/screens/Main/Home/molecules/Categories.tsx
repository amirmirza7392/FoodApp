import {ScrollView, StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import React from 'react';

import CustomImage from '../../../../components/CustomImage';
import CustomText from '../../../../components/CustomText';

import {categories} from '../../../../utils/constants';
import {metrics} from '../../../../utils/metrics';
import {colors} from '../../../../utils/colors';

const Categories = () => {
  return (
    <View>
      <CustomText
        label="Categories"
        fontSize={25}
        fontWeight="bold"
        marginBottom={10}
        color={colors.blue}
      />
      <ScrollView
        horizontal
        contentContainerStyle={styles.scroll}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.mapContainer}>
          {categories?.map(item => (
            <View
              style={[
                styles.itemContainer,
                {marginLeft: metrics.width(item.id == 1 ? 2 : 15)},
              ]}
              key={item?.id}>
              <CustomImage
                resizeMode={FastImage.resizeMode.cover}
                source={{uri: item?.image}}
                style={styles.image}
              />
              <CustomText
                label={item?.name}
                fontSize={18}
                fontWeight="500"
                marginTop={15}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  mapContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scroll: {
    paddingVertical: metrics.height(5),
    paddingRight: metrics.width(5),
  },
  itemContainer: {
    width: metrics.width(135),
    height: metrics.height(150),
    backgroundColor: colors.white,
    padding: metrics.width(10),
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  image: {
    width: metrics.width(100),
    height: metrics.height(70),
    borderRadius: 10,
    marginTop: metrics.height(5),
  },
});
