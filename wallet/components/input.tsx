import React from 'react';
import {TextInput, TextInputProps, StyleSheet} from 'react-native';

import {colors} from './theme';

const styles = StyleSheet.create({
  textInput: {
    width: '70%',
    backgroundColor: colors.white,
    marginBottom: 12,
    height: 48,
    padding: 12,
    borderColor: colors.black,
    borderRadius: 12,
    borderWidth: 3,
  },
});

export const JobCoinTextInput = (props: TextInputProps) => (
  <TextInput
    style={styles.textInput}
    onChangeText={props.onChangeText}
    value={props.value}
    {...props}
  />
);
