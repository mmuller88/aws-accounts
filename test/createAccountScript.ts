import {
  createAccount,
  moveAccountToOU,
  getAccountIdFromName,
} from '../src/createAccount';

/**
 * @param sandboxId per argument like `./node_modules/.bin/ts-node ./scripts/${fileName} test123`
 */
export async function main(): Promise<void> {
  var args = process.argv.slice(2);

  if (args.length !== 1) {
    usage();
    throw new Error('Wrong number of arguments');
  }

  const accountName = args[0];

  const response = await createAccount(accountName);
  console.log(JSON.stringify(response));
  const accountId = await getAccountIdFromName(accountName);
  console.log(accountId);
  if (accountId) {
    await moveAccountToOU(accountId);
  }
}

await main();

function usage() {
  const fileName = 'createAccount.ts';
  console.log(
    `example call: ./node_modules/.bin/ts-node ./scripts/${fileName} test123`,
  );
}
