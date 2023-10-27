import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';

import CustomInput from '../../../components/CustomInput';
import AuthWrapper from '../../../components/AuthWrapper';

interface ProfileProps {
  navigation: any;
}

const Profile: React.FC<ProfileProps> = ({navigation}) => {
  const [image, setImage] = useState<any>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const getProfile = async () => {
    const res = await AsyncStorage.getItem('userData');
    const finalRes = JSON.parse(res);
    setImage(finalRes?.image);
    setEmail(finalRes?.email);
    setUserName(finalRes?.name);
  };
  useEffect(() => {
    getProfile();
  }, []);

  const inputs = [
    {
      id: 0,
      value: userName,
    },
    {
      id: 1,
      value: email,
    },
  ];

  return (
    <AuthWrapper
      title="Profile"
      hideButton
      buttontitle="Profile"
      image={image}
      isBack
      hideLogo>
      {inputs?.map(item => (
        <CustomInput
          key={item.id}
          value={item.value}
          borderRadius={100}
          marginBottom={20}
          editable={false}
        />
      ))}
    </AuthWrapper>
  );
};

export default Profile;
