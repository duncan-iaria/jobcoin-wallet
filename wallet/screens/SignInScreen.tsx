import React from 'react';
import {
  Text,
  View,
  StatusBar,
  SafeAreaView,
  useColorScheme,
} from 'react-native';

export const SignInScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <View>
        <Text>Sign in screen...</Text>
      </View>
    </SafeAreaView>
  );
};
