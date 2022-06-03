import {groupTransactionsByDay} from './transactions';

it('Group Transactions By Day should group the transaction... by day!', () => {
  expect(groupTransactionsByDay('Doinkin', mockTransactions)).toStrictEqual([
    {
      balance: 35,
      balanceChanges: [50, -12, 4, -7],
      day: new Date('2022-05-28T04:00:00.000Z'),
    },
    {
      balance: 38,
      balanceChanges: [6, -3],
      day: new Date('2022-05-29T04:00:00.000Z'),
    },
    {
      balance: 26,
      balanceChanges: [-2, -10],
      day: new Date('2022-05-30T04:00:00.000Z'),
    },
    {
      balance: 26,
      balanceChanges: [0],
      day: new Date('2022-05-31T04:00:00.000Z'),
    },
    {
      balance: 35,
      balanceChanges: [9],
      day: new Date('2022-06-01T04:00:00.000Z'),
    },
    {
      balance: 32,
      balanceChanges: [-3],
      day: new Date('2022-06-02T04:00:00.000Z'),
    },
  ]);
});

it('Group transactions by day to not blow up if you pass it no transactions', () => {
  expect(groupTransactionsByDay('Doinkin')).toBeNull;
  expect(groupTransactionsByDay('Doinkin', [])).toBeNull;
});

const mockTransactions = [
  // Day 1
  {
    timestamp: '2022-05-28T15:35:04.846Z',
    toAddress: 'Doinkin',
    amount: '50',
  },
  {
    timestamp: '2022-05-28T15:36:51.007Z',
    fromAddress: 'Doinkin',
    toAddress: 'Duncan',
    amount: '12',
  },
  {
    timestamp: '2022-05-28T15:37:05.791Z',
    fromAddress: 'Duncan',
    toAddress: 'Doinkin',
    amount: '4',
  },
  {
    timestamp: '2022-05-29T01:11:05.837Z',
    fromAddress: 'Doinkin',
    toAddress: 'Duncan',
    amount: '7',
  },
  // Day 2
  {
    timestamp: '2022-05-29T16:56:04.798Z',
    fromAddress: 'Alice',
    toAddress: 'Doinkin',
    amount: '6',
  },
  {
    timestamp: '2022-05-29T17:06:14.366Z',
    fromAddress: 'Doinkin',
    toAddress: 'Sophie',
    amount: '3',
  },
  // Day 3
  {
    timestamp: '2022-05-30T17:14:27.421Z',
    fromAddress: 'Doinkin',
    toAddress: 'Sophie',
    amount: '2',
  },
  {
    timestamp: '2022-05-31T02:08:26.642Z',
    fromAddress: 'Doinkin',
    toAddress: 'Bob',
    amount: '10',
  },
  // Day 4
  // empty

  // Day 5
  {
    timestamp: '2022-06-01T16:57:42.012Z',
    fromAddress: 'Sophie',
    toAddress: 'Doinkin',
    amount: '9',
  },
  // Day 6
  {
    timestamp: '2022-06-03T01:00:59.735Z',
    fromAddress: 'Doinkin',
    toAddress: 'Sophie',
    amount: '3',
  },
];
