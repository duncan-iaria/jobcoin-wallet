import React from 'react';
import {
  Text,
  View,
  useColorScheme,
  SafeAreaView,
  StatusBar,
} from 'react-native';

export const PortfolioScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
        <Text>Sign in screen...</Text>
      </View>
    </SafeAreaView>
  );
};
