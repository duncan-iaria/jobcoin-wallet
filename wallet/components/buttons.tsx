import React from 'react';
import {Pressable, PressableProps, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  primaryButton: {
    width: 100,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#333',
    backgroundColor: 'gold',
  },
  pressedPrimaryButton: {
    width: 100,
    borderRadius: 12,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#333',
    backgroundColor: 'orange',
  },
  inset: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 94,
    height: 42,
    borderWidth: 3,
    borderColor: '#333',
  },
});

export const PrimaryButton = (props: PressableProps) => {
  return (
    <Pressable
      style={({pressed}) =>
        pressed ? styles.pressedPrimaryButton : styles.primaryButton
      }
      {...props}>
      <View style={styles.inset}>{props.children}</View>
    </Pressable>
  );
};
