import React from 'react';
import {Pressable, PressableProps, StyleSheet, View} from 'react-native';

import {colors} from './theme';

// #2d1f10 -2px 2px 0px 0px

const styles = StyleSheet.create({
  primaryButton: {
    width: 100,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.black,
    backgroundColor: colors.primary,
    shadowColor: colors.black,
    shadowRadius: 0,
    shadowOpacity: 1,
    shadowOffset: {width: -4, height: 4},
    borderColor: colors.black,
    borderWidth: 2,
  },
  pressedPrimaryButton: {
    width: 100,
    borderRadius: 12,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.black,
    backgroundColor: colors.primary,
    borderColor: colors.black,
    borderWidth: 2,
    shadowColor: colors.black,
    shadowRadius: 0,
    shadowOpacity: 0,
    shadowOffset: {width: 0, height: 0},
    transform: [{translateY: 4}, {translateX: -4}],
  },
  inset: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 94,
    height: 42,
    borderWidth: 3,
    borderColor: 'transparent',
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
