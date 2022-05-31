import {isSameDay, eachDayOfInterval, parseISO} from 'date-fns';

import {Transaction} from '../types';

// TODO rename this
type BalanceOverTime = {
  balance: number;
  balanceChanges: number[];
  day: Date;
};

export const groupTransactionsByDay = (
  accountAddress: string,
  transactions?: Transaction[],
) => {
  console.log('GROUPING TXs!!! \n\n');
  if (!transactions || transactions.length === 0) {
    // TODO default response
    return [];
  }

  const today = new Date();
  const originalFundingDate = parseISO(transactions[0].timestamp);
  console.log('original funding date', originalFundingDate, 'tx', transactions);

  const daysFromFundingToNow =
    originalFundingDate &&
    eachDayOfInterval({start: originalFundingDate, end: today});

  console.info('days', daysFromFundingToNow);

  if (originalFundingDate) {
    const chunkedTx = daysFromFundingToNow?.reduce(
      (accumulator, currentDay, index) => {
        const txsOnDay = transactions.filter(tempTx =>
          isSameDay(new Date(tempTx.timestamp), currentDay),
        );

        const balanceChanges = txsOnDay.map(tempTransaction =>
          tempTransaction.toAddress === accountAddress
            ? parseFloat(tempTransaction.amount)
            : -tempTransaction.amount,
        );

        console.log(balanceChanges);

        const change = balanceChanges.reduce(
          (acc, currentChange) => acc + currentChange,
          0,
        );

        return [
          ...accumulator,
          {
            day: currentDay,
            balanceChanges,
            balance:
              index === 0 ? change : accumulator[index - 1].balance + change,
          },
        ];
      },
      [] as BalanceOverTime[],
    );

    console.log('chunked', chunkedTx);

    return chunkedTx;
  }
};
