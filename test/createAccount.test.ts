import {
  createAccountResponse,
  listAccountsResponse,
  moveAccountResponse,
} from '../__mocks__/aws-sdk';
import * as createAccount from '../src/createAccount';
// AWS.config.update({ region: 'us-west-2' });

describe('createAccount call', () => {
  const fakeAccountID = '222333193111';
  const fakeEnvName = 'blub1234';

  test('create account works', async () => {
    createAccountResponse.mockReturnValueOnce({ status: 'IN_PROGRESS' });

    const response = await createAccount.createAccount(fakeEnvName);
    expect(JSON.stringify(response)).toContain('IN_PROGRESS');
  });

  test('would work', async () => {
    moveAccountResponse.mockRejectedValueOnce(
      new Error(`You specified an account that doesn't exist`),
    );

    try {
      await createAccount.moveAccountToOU(fakeAccountID, 'ou-zblx-w7yw0qge');
    } catch (error) {
      if ((error as Error).message) {
        expect((error as Error).message).toContain(
          'You specified an account that doesn',
        );
        return;
      }
    }
    fail();
  });

  test('get accountId from invalid accountName', async () => {
    listAccountsResponse.mockRejectedValueOnce(new Error('Account not found'));

    try {
      await createAccount.getAccountIdFromName(fakeEnvName);
    } catch (error) {
      if ((error as Error).message) {
        expect((error as Error).message).toContain('not found');
        return;
      }
    }
    fail();
  });
});
