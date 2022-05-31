import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Screens, RootStackParamList} from '../navigation';
import {Screen, PrimaryButton, ButtonText} from '../components';

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
  route,
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
        <TextInput
          style={{
            width: '70%',
            backgroundColor: 'white',
            marginBottom: 12,
            height: 48,
            padding: 12,
            borderColor: 'black',
            borderRadius: 12,
            borderWidth: 3,
          }}
          onChangeText={setAccountString}
          value={accountString}></TextInput>
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
