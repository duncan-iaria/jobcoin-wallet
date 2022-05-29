export enum Screens {
  Account = 'account',
  SignIn = 'sign-in',
}

export type RootStackParamList = {
  [Screens.SignIn]: undefined;
  [Screens.Account]: {accountId: string};
};
