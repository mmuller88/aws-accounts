import { deleteAccount } from '../src/deleteAccount';

/**
 * @param sandboxId per argument like `./node_modules/.bin/ts-node ./scripts/${fileName} test123`
 */
export async function main(): Promise<void> {
  var args = process.argv.slice(2);

  if (args.length !== 1) {
    usage();
    throw new Error('Wrong number of arguments');
  }

  const id = args[0];

  await deleteAccount(id);
}

await main();

function usage() {
  const fileName = 'deleteAccount.ts';
  console.log(
    `example call: ./node_modules/.bin/ts-node ./scripts/${fileName} 981237193111`,
  );
}
