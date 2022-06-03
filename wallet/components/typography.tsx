import React from 'react';
import {Text, TextProps, StyleSheet} from 'react-native';

import {colors} from './theme';

export const BodyText = (props: TextProps) => {
  const {style} = props;
  return (
    <Text {...props} style={[styles.bodyText, style]}>
      {props.children}
    </Text>
  );
};

export const ButtonText = (props: TextProps) => {
  const {style} = props;
  return (
    <Text {...props} style={[styles.buttonText, style]}>
      {props.children}
    </Text>
  );
};

export const H1Text = (props: TextProps) => {
  const {style} = props;
  return (
    <Text {...props} style={[styles.h1, style]}>
      {props.children}
    </Text>
  );
};

export const H2Text = (props: TextProps) => {
  const {style} = props;
  return (
    <Text {...props} style={[styles.h2, style]}>
      {props.children}
    </Text>
  );
};

export const LinkText = (props: TextProps) => {
  const {style} = props;
  return (
    <Text {...props} style={[styles.linkText, style]}>
      {props.children}
    </Text>
  );
};

export const SubText = (props: TextProps) => {
  const {style} = props;
  return (
    <Text {...props} style={[styles.subText, style]}>
      {props.children}
    </Text>
  );
};

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
  h2: {
    ...BASE_TEXT,
    fontSize: BASE_TEXT.fontSize * 2,
    fontWeight: 'bold',
  },
  linkText: {
    ...BASE_TEXT,
    textDecorationLine: 'underline',
  },
  subText: {
    fontSize: 10,
    color: colors.subText,
  },
});
