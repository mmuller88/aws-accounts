// import * as AWS from 'aws-sdk';

export class Organizations {
  public createAccount: jest.Mock<any, any>;
  public moveAccount: jest.Mock<any, any>;
  public listAccounts: jest.Mock<any, any>;
  public closeAccount: jest.Mock<any, any>;

  constructor() {
    this.createAccount = createAccountFn;
    this.moveAccount = moveAccountFn;
    this.listAccounts = listAccountsFn;
    this.closeAccount = closeAccountFn;
  }
}

export const createAccountResponse = jest
  .fn()
  .mockReturnValue(Promise.resolve(true));
const createAccountFn = jest
  .fn()
  .mockImplementation(() => ({ promise: createAccountResponse }));

export const moveAccountResponse = jest
  .fn()
  .mockReturnValue(Promise.resolve(true));
const moveAccountFn = jest
  .fn()
  .mockImplementation(() => ({ promise: moveAccountResponse }));

export const listAccountsResponse = jest
  .fn()
  .mockReturnValue(Promise.resolve(true));
const listAccountsFn = jest
  .fn()
  .mockImplementation(() => ({ promise: listAccountsResponse }));

export const closeAccountResponse = jest
  .fn()
  .mockReturnValue(Promise.resolve(true));
const closeAccountFn = jest
  .fn()
  .mockImplementation(() => ({ promise: closeAccountResponse }));
