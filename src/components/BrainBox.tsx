import React, {ReactNode} from 'react';
import {View} from 'react-native';
import {colors} from '../utils/colors';

interface BrainBoxProps {
  children: ReactNode;
}

const BrainBox: React.FC<BrainBoxProps> = ({children}) => {
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>{children}</View>
  );
};

export default BrainBox;
