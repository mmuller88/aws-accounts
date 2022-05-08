import * as AWS from 'aws-sdk';
import * as deleteAccount from '../src/deleteAccount';
AWS.config.update({ region: 'us-west-2' });

const fileName = 'deleteAccount.js';

describe(`${fileName} call`, () => {
  test('would work', async () => {
    try {
      await deleteAccount.deleteAccount('222333193111');
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
});
