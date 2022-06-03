import {API_URL} from 'react-native-dotenv';

export type p2pArgs = {
  fromAddress: string;
  toAddress: string;
  amount: number;
};

export async function transferCoins(p2pArgs: p2pArgs): Promise<any> {
  console.log(`generating transaction`, p2pArgs);
  const response = await fetch(`${API_URL}/transactions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(p2pArgs),
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
