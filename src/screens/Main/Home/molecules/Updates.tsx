import FastImage from 'react-native-fast-image';
import {StyleSheet, View} from 'react-native';
import React from 'react';

import CustomButton from '../../../../components/CustomButton';
import CustomImage from '../../../../components/CustomImage';
import CustomText from '../../../../components/CustomText';

import {metrics} from '../../../../utils/metrics';
import {colors} from '../../../../utils/colors';

interface Item {
  thumb: string;
  headline: string;
  description: string;
  calories: number;
}

interface UpdatesProps {
  array: Item[];
}

const Updates: React.FC<UpdatesProps> = ({array}) => {
  return (
    <View>
      <CustomText
        label="Updates"
        fontSize={25}
        marginTop={40}
        fontWeight="bold"
        marginBottom={20}
        color={colors.blue}
      />
      {array.map((item, i) => (
        <View style={styles.itemContainer} key={i}>
          <CustomImage
            source={{uri: item.thumb}}
            resizeMode={FastImage.resizeMode.cover}
            style={styles.image}
          />
          <CustomText
            numberOfLines={1}
            label={item?.headline}
            fontSize={18}
            fontWeight="500"
            marginTop={5}
          />
          <CustomText
            numberOfLines={3}
            label={item?.description}
            fontSize={16}
            fontWeight="500"
            marginTop={5}
            textAlign="left"
            color={colors.placeHolder}
          />
          <View style={styles.footer}>
            <View style={styles.footerView}>
              <CustomText
                label={`Calories : ${item.calories}`}
                fontSize={22}
                fontWeight="bold"
              />
            </View>
            <CustomButton title="Order" width="30%" height={35} />
          </View>
        </View>
      ))}
    </View>
  );
};

export default Updates;

const styles = StyleSheet.create({
  itemContainer: {
    width: '100%',
    height: metrics.height(258),
    backgroundColor: colors.white,
    marginBottom: metrics.height(20),
    borderRadius: 10,
    padding: metrics.width(15),
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
    width: '100%',
    height: metrics.height(100),
    borderRadius: 8,
  },
  footer: {
    width: '100%',
    height: metrics.height(35),
    marginTop: metrics.height(8),
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerView: {
    width: '70%',
  },
});
