import React from 'react';
import {TextInput, TextInputProps, StyleSheet} from 'react-native';

import {colors} from './theme';

const styles = StyleSheet.create({
  textInput: {
    width: '70%',
    minWidth: '70%',
    backgroundColor: colors.white,
    marginBottom: 12,
    height: 48,
    padding: 12,
    borderColor: colors.black,
    borderRadius: 12,
    borderWidth: 3,
  },
});

export const JobCoinTextInput = React.forwardRef(
  (props: TextInputProps, ref) => {
    const {style} = props;
    return (
      <TextInput
        {...props}
        //@ts-ignore uses legacy Ref which is an incompatible type -- figure this out
        ref={ref}
        style={[styles.textInput, style]}
        onChangeText={props.onChangeText}
        value={props.value}
      />
    );
  },
);
