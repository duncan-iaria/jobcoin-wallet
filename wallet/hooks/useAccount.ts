import {useMemo} from 'react';
import {useQuery} from 'react-query';

import {getAccount} from '../api';
import {groupTransactionsByDay} from '../utils/transactions';

export const useAccount = (accountAddress: string) => {
  const {data, isLoading, error} = useQuery('account', () =>
    getAccount(accountAddress),
  );

  const transactionsByDay = useMemo(
    () => groupTransactionsByDay(accountAddress, data?.transactions),
    [data?.transactions, accountAddress],
  );

  return {
    data,
    isLoading,
    error,
    transactionsByDay,
  };
};
