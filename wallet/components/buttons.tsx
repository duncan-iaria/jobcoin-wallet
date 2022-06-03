import React from 'react';
import {Pressable, PressableProps, StyleSheet, View} from 'react-native';

import {colors} from './theme';
import {LinkText} from './typography';

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
  linkButton: {},
});

export const PrimaryButton = (props: PressableProps) => {
  return (
    <Pressable
      {...props}
      //@ts-ignore Typescript is trippin' here
      style={({pressed}) =>
        pressed
          ? [styles.pressedPrimaryButton, props.style]
          : [styles.primaryButton, props.style]
      }>
      <View style={styles.inset}>{props.children}</View>
    </Pressable>
  );
};

export const LinkButton = (props: PressableProps) => {
  return (
    <Pressable {...props}>
      <LinkText>{props.children}</LinkText>
    </Pressable>
  );
};
