import React from 'react';
import {Text, TextProps, StyleSheet} from 'react-native';

import {colors} from './theme';

const DEFAULT_COLOR = colors.black;
const BASE_TEXT = {
  fontSize: 16,
  color: DEFAULT_COLOR,
};

const styles = StyleSheet.create({
  bodyText: {
    ...BASE_TEXT,
  },
  buttonText: {
    ...BASE_TEXT,
    fontWeight: '600',
  },
  h1: {
    ...BASE_TEXT,
    fontSize: BASE_TEXT.fontSize * 4,
    fontWeight: 'bold',
  },
});

export const BodyText = (props: TextProps) => {
  return (
    <Text style={styles.bodyText} {...props}>
      {props.children}
    </Text>
  );
};

export const ButtonText = (props: TextProps) => {
  return (
    <Text style={styles.buttonText} {...props}>
      {props.children}
    </Text>
  );
};

export const H1Text = (props: TextProps) => {
  return (
    <Text style={styles.h1} {...props}>
      {props.children}
    </Text>
  );
};
