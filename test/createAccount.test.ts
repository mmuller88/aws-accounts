import * as AWS from 'aws-sdk';
import * as createSandbox from '../scripts/createAccount';
AWS.config.update({ region: 'us-west-2' });

describe('createSandbox call', () => {
  const fakeAccountID = '222333193111';
  const fakeEnvName = 'blub1234';

  test('create account works', async () => {
    const response = await createSandbox.createAccount(fakeEnvName);
    expect(JSON.stringify(response)).toContain('IN_PROGRESS');
  });

  test('would work', async () => {
    try {
      await createSandbox.moveAccountToOU(fakeAccountID);
    } catch (error) {
      if ((error as Error).message) {
        expect((error as Error).message).toContain(
          'You specified an account that doesn',
        );
      } else {
        fail();
      }
    }
  });

  test('get accountId from invalid accountName', async () => {
    try {
      await createSandbox.getAccountIdFromName(fakeEnvName);
    } catch (error) {
      if ((error as Error).message) {
        expect((error as Error).message).toContain('not found');
      } else {
        fail();
      }
    }
  });
});
