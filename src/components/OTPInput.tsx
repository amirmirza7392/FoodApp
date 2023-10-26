import React, {useState, useRef} from 'react';
import {View, TextInput, StyleSheet, Keyboard} from 'react-native';
import {metrics} from '../utils/metrics';
import {colors} from '../utils/colors';

interface OTPInputProps {
  length?: number;
  onInputComplete: (otp: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({length = 4, onInputComplete}) => {
  const [otp, setOTP] = useState<string[]>(['', '', '', '']);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleInputChange = (text: string, index: number) => {
    if (isNaN(Number(text))) return; // Allow only numeric input

    const newOTP = [...otp];
    newOTP[index] = text;
    setOTP(newOTP);

    if (index < length - 1 && text !== '') {
      // Move focus to the next input
      inputRefs.current[index + 1]?.focus();
    }

    if (!newOTP.includes('')) {
      onInputComplete(newOTP.join(''));
      Keyboard.dismiss(); // Dismiss the keyboard
    }
  };

  const handleBackspace = (index: number) => {
    const newOTP = [...otp];
    if (index > 0) {
      newOTP[index] = '';
      setOTP(newOTP);
      inputRefs.current[index - 1]?.focus();
    } else if (index === 0 && newOTP[0] !== '') {
      newOTP[0] = '';
      setOTP(newOTP);
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((value, index) => (
        <TextInput
          key={index}
          ref={ref => (inputRefs.current[index] = ref)}
          style={styles.input}
          value={value}
          onChangeText={text => handleInputChange(text, index)}
          onKeyPress={e => {
            if (e.nativeEvent.key === 'Backspace') {
              handleBackspace(index);
            }
          }}
          maxLength={1}
          keyboardType="numeric"
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: metrics.width(15),
  },
  input: {
    borderWidth: 1.5,
    borderColor: colors.blue,
    fontSize: metrics.width(20),
    width: metrics.width(60),
    height: metrics.width(60),
    borderRadius: 5,
    textAlign: 'center',
  },
});

export default OTPInput;
