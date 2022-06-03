import {isSameDay, eachDayOfInterval, parseISO} from 'date-fns';

import {Transaction} from '../types';

type TransactionsGroupedByDay = {
  balance: number;
  balanceChanges: number[];
  day: Date;
};

export const groupTransactionsByDay = (
  accountAddress: string,
  transactions?: Transaction[],
) => {
  console.log('Grouping TXs by day...');
  if (!transactions || transactions.length === 0) {
    return null;
  }

  const transactionsToReturn = 7;
  const today = new Date();
  const originalFundingDate = parseISO(transactions[0].timestamp);

  const daysFromFundingToNow =
    originalFundingDate &&
    eachDayOfInterval({start: originalFundingDate, end: today});

  if (originalFundingDate) {
    const transactionsGroupedByDay = daysFromFundingToNow?.reduce(
      (accumulator, currentDay, index) => {
        const txsOnDay = transactions.filter(tempTx =>
          isSameDay(new Date(tempTx.timestamp), currentDay),
        );

        if (txsOnDay.length === 0) {
          return [
            ...accumulator,
            {
              day: currentDay,
              balanceChanges: [0],
              balance: index === 0 ? 0 : accumulator[index - 1].balance,
            },
          ];
        }

        const balanceChanges = txsOnDay.map(tempTransaction => {
          return tempTransaction.toAddress === accountAddress
            ? parseFloat(tempTransaction.amount) // Sent TO this address (net positive change)
            : -tempTransaction.amount; // Sent FROM this address (net negative change)
        });

        const dailyChange = balanceChanges.reduce(
          (acc, currentBalanceChange) => acc + currentBalanceChange,
          0,
        );

        return [
          ...accumulator,
          {
            day: currentDay,
            balanceChanges,
            balance:
              index === 0
                ? dailyChange
                : accumulator[index - 1].balance + dailyChange,
          },
        ];
      },
      [] as TransactionsGroupedByDay[],
    );

    return transactionsGroupedByDay.slice(-transactionsToReturn);
  }
};
