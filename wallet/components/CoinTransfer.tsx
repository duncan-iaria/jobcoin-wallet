import React from 'react';
import {View} from 'react-native';

import {BodyText} from './typography';
import {JobCoinTextInput} from './input';
import {PrimaryButton} from './buttons';

export const CoinTransfer = () => {
  return (
    <View>
      <BodyText>Transfer Coin</BodyText>
      <BodyText>To</BodyText>
      <JobCoinTextInput />
      <BodyText>Amount</BodyText>
      <JobCoinTextInput />
      <PrimaryButton>
        <BodyText>LFGGG!</BodyText>
      </PrimaryButton>
    </View>
  );
};
