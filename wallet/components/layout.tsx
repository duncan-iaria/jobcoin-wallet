import React from 'react';
import {View, StyleSheet, ViewProps, SafeAreaView} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff2d1',
  },
  container: {
    flex: 1,
  },
});

export const Screen = (props: ViewProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screen} {...props}>
        {props.children}
      </View>
    </SafeAreaView>
  );
};
