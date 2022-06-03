import React from 'react';
import {View, StyleSheet} from 'react-native';

import {BodyText, H1Text} from './typography';

interface Props {
  balance?: string;
}

export const BalanceDisplay = ({balance}: Props) => {
  return (
    <View style={styles.container}>
      <H1Text style={styles.balanceText}>{balance ? balance : '-'}</H1Text>
      <BodyText style={styles.titleText}>Current Balance</BodyText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
    marginBottom: 8,
  },
  titleText: {
    width: 60,
    marginHorizontal: 8,
    textAlign: 'right',
  },
  balanceText: {
    // flex: 1,
    // backgroundColor: 'red',
  },
});
