import {useMutation, useQueryClient} from 'react-query';

import {transferCoins, p2pArgs} from '../api';

export const useTransferCoins = () => {
  const queryClient = useQueryClient();

  const {mutate, isLoading, error} = useMutation(
    (p2pArgs: p2pArgs) => transferCoins(p2pArgs),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('account');
      },
    },
  );
  return {
    isLoading,
    error,
    transferCoins: mutate,
  };
};
