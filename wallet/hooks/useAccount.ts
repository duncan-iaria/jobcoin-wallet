import {useQuery} from 'react-query';
import {getAccount} from '../api';

export const useAccount = (accountAddress: string) => {
  const {data, isLoading, error} = useQuery('account', () =>
    getAccount(accountAddress),
  );

  return {
    data,
    isLoading,
    error,
  };
};
