import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';

import Icons from '../../../../components/CustomIcon';

import {metrics} from '../../../../utils/metrics';
import {colors} from '../../../../utils/colors';

interface SearchProps {
  value: any;
  setValue: any;
}

const Search: React.FC<SearchProps> = ({value, setValue}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={{width: '11%'}}>
        <Icons family="Ionicons" name="search" size={metrics.width(30)} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="What you want to search?"
        placeholderTextColor={colors.placeHolder}
        value={value || ''}
        onChangeText={text => setValue(text)}
      />
      {value?.length > 0 ? (
        <TouchableOpacity
          onPress={() => setValue(null)}
          style={styles.cross}
          activeOpacity={0.6}>
          <Icons
            family="Entypo"
            name="circle-with-cross"
            color={colors.red}
            size={metrics.width(30)}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    width: '100%',
    height: metrics.height(65),
    paddingHorizontal: metrics.width(20),
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginTop: metrics.height(10),
    marginBottom: metrics.height(30),
  },
  input: {
    padding: 0,
    margin: 0,
    fontSize: metrics.width(18),
    width: '89%',
    height: '100%',
  },
  cross: {
    position: 'absolute',
    right: metrics.width(15),
  },
});
