import {useMemo} from 'react';
import {isSameDay, eachDayOfInterval} from 'date-fns';
import {useQuery} from 'react-query';

import {getAccount} from '../api';
import {groupTransactionsByDay} from '../utils/transactions';

// TODO rename this
type BalanceOverTime = {
  balance: number;
  balanceChanges: number[];
  day: Date;
};

export const useAccount = (accountAddress: string) => {
  const {data, isLoading, error} = useQuery('account', () =>
    getAccount(accountAddress),
  );

  const transactionsByDay = useMemo(
    () => groupTransactionsByDay(accountAddress, data?.transactions),
    [data?.transactions?.length],
  );

  // const transactionsByDay = () => {
  //   const today = new Date();
  //   const originalFundingDate =
  //     data && new Date(data?.transactions[0].timestamp);

  //   const days =
  //     originalFundingDate &&
  //     eachDayOfInterval({start: originalFundingDate, end: today});
  //   console.info('days', days);
  //   if (originalFundingDate) {
  //     const transactions = data.transactions.sort((a, b) =>
  //       a.timestamp > b.timestamp ? 1 : -1,
  //     );

  //     const chunkedTx = days?.reduce((accumulator, currentDay, index) => {
  //       const txsOnDay = transactions.filter(tempTx =>
  //         isSameDay(new Date(tempTx.timestamp), currentDay),
  //       );

  //       const balanceChanges = txsOnDay.map(tempTransaction =>
  //         tempTransaction.toAddress === accountAddress
  //           ? parseFloat(tempTransaction.amount)
  //           : -tempTransaction.amount,
  //       );

  //       console.log(balanceChanges);

  //       const change = balanceChanges.reduce(
  //         (acc, currentChange) => acc + currentChange,
  //         0,
  //       );

  //       return [
  //         ...accumulator,
  //         {
  //           day: currentDay,
  //           balanceChanges,
  //           balance:
  //             index === 0 ? change : accumulator[index - 1].balance + change,
  //         },
  //       ];
  //     }, [] as BalanceOverTime[]);

  //     console.log('chunked', chunkedTx);

  //     return chunkedTx;
  //   }
  // };

  return {
    data,
    isLoading,
    error,
    transactionsByDay,
  };
};
