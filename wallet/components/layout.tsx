import React from 'react';
import {
  View,
  StyleSheet,
  ViewProps,
  SafeAreaView,
  Dimensions,
} from 'react-native';

export const Screen = (props: ViewProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screen} {...props}>
        {props.children}
      </View>
    </SafeAreaView>
  );
};

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff2d1',
  },
  container: {
    flex: 1,
    height: screenHeight,
  },
});
