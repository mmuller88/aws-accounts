// import * as AWS from 'aws-sdk';

export const createAccountResponse = jest
  .fn()
  .mockReturnValue(Promise.resolve(true));
const createAccountFn = jest
  .fn()
  .mockImplementation(() => ({ promise: createAccountResponse }));

export class Organizations {
  public createAccount: jest.Mock<any, any>;

  constructor() {
    this.createAccount = createAccountFn;
  }
}
