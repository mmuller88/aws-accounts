import { closeAccountResponse } from '../__mocks__/aws-sdk';
import * as deleteAccount from '../src/deleteAccount';
// AWS.config.update({ region: 'us-west-2' });

const fileName = 'deleteAccount.js';

test(`${fileName} call`, async () => {
  closeAccountResponse.mockRejectedValueOnce(
    new Error(`You specified an account that doesn't exist`),
  );
  try {
    await deleteAccount.deleteAccount('222333193111');
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
