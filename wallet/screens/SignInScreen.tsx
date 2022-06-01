import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Screens, RootStackParamList} from '../navigation';
import {
  Screen,
  PrimaryButton,
  ButtonText,
  JobCoinTextInput,
} from '../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const SignInScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, Screens.SignIn>) => {
  const [accountString, setAccountString] = useState('');

  const onLogin = () => {
    if (accountString.length === 0) {
      return;
    }

    navigation.navigate(Screens.Account, {accountId: accountString});
  };

  return (
    <Screen>
      <View style={styles.container}>
        <JobCoinTextInput
          onChangeText={setAccountString}
          value={accountString}
        />
        <PrimaryButton
          onPress={() => {
            console.log('hey');
            onLogin();
          }}>
          <ButtonText>LOGIN</ButtonText>
        </PrimaryButton>
      </View>
    </Screen>
  );
};
