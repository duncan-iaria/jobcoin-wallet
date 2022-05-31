import {API_URL} from 'react-native-dotenv';

import {Transaction} from '../types';
export interface AccountResponse {
  balance: string;
  transactions: Transaction[];
}

export const mockAccountResponse = {
  balance: '38',
  transactions: [
    {
      timestamp: '2022-05-28T15:35:04.846Z',
      toAddress: 'Doinkin',
      amount: '50',
    },
  ],
};

export async function getAccount(
  accountAddress: string,
): Promise<AccountResponse> {
  console.log(`getting account info for ${accountAddress}, ${API_URL}`);
  const response = await fetch(`${API_URL}/addresses/${accountAddress}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.status < 300) {
    const responseJson = await response.json();
    return responseJson;
  } else {
    throw Error(
      `Error Code ${response.status}: Something went wrong fetching the user's account data...`,
    );
  }
}
