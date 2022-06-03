import React, {useRef, useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import {useTransferCoins} from '../hooks';
import {BodyText, SubText} from './typography';
import {JobCoinTextInput} from './input';
import {PrimaryButton} from './buttons';

interface Props {
  accountAddress: string;
  balance?: string;
}

export const CoinTransfer = ({accountAddress, balance = '0'}: Props) => {
  const [transferAddress, setTransferAddress] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [error, setError] = useState<string>('');
  const amountInputRef = useRef<TextInput>(null);

  const {transferCoins} = useTransferCoins();

  const handleTransferCoins = () => {
    if (!transferAddress || !amount) {
      setError('Please add an amount and address');
      return;
    }

    const amountFloat = parseFloat(amount);
    const balanceFloat = parseFloat(balance);

    if (amountFloat > balanceFloat) {
      setError('You need more coin!');
      return;
    }
    try {
      transferCoins({
        amount: parseFloat(amount),
        toAddress: transferAddress,
        fromAddress: accountAddress,
      });

      setTransferAddress('');
      setAmount('');
    } catch (error: any) {
      setError(error || error?.message || 'Something went wrong...');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <BodyText style={styles.errorText}>{error || ''}</BodyText>
        <BodyText style={styles.titleText}>Transfer Job Coins</BodyText>
        <JobCoinTextInput
          value={transferAddress}
          keyboardType="email-address"
          returnKeyType="next"
          placeholder="Jobcoin Address"
          onChangeText={setTransferAddress}
          onEndEditing={() => {
            amountInputRef.current?.focus();
          }}
        />
        <JobCoinTextInput
          ref={amountInputRef}
          keyboardType="numeric"
          placeholder="Amount"
          onChangeText={setAmount}
          value={amount}
          style={{marginBottom: 4}}
        />
        <SubText style={styles.subText}>
          Jobcoin™ transactions are quick and free!
        </SubText>
        <PrimaryButton
          style={styles.transferButton}
          onPress={handleTransferCoins}>
          <BodyText>LFGGG!</BodyText>
        </PrimaryButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  errorText: {color: 'red', alignSelf: 'center', marginBottom: 8},
  titleText: {alignSelf: 'flex-start', marginBottom: 4},
  transferButton: {alignSelf: 'flex-end'},
  subText: {marginBottom: 8, marginTop: 4, alignSelf: 'flex-end'},
});
