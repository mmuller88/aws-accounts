import * as AWS from 'aws-sdk';

AWS.config.update({ region: 'us-east-1' });

const org = new AWS.Organizations();

export async function createAccount(accountName: string) {
  const createAccountRequestParams: AWS.Organizations.Types.CreateAccountRequest =
    {
      Email: `neatleaf+${accountName}@neatleaf.com`,
      AccountName: accountName,
    };
  console.debug(
    `createAccountRequestParams=${JSON.stringify(createAccountRequestParams)}`,
  );
  const response = await org
    .createAccount(createAccountRequestParams)
    .promise();
  console.debug(response);
  return response;
}

export async function getAccountIdFromName(accountName: string) {
  const response = await org.listAccounts().promise();
  for (let account of response.Accounts ?? []) {
    if (account.Name === accountName) {
      return account.Id;
    }
  }
  throw Error(`Account with name ${accountName} not found`);
}

export async function moveAccountToOU(accountId: string) {
  const moveAccountRequestParams: AWS.Organizations.Types.MoveAccountRequest = {
    AccountId: accountId,
    SourceParentId: 'r-zblx', // root
    DestinationParentId: 'ou-zblx-w7yw0qge', // neatleaf-sandboxes
  };
  console.debug(
    `moveAccountRequestParams=${JSON.stringify(moveAccountRequestParams)}`,
  );
  const response = await org.moveAccount(moveAccountRequestParams).promise();
  console.debug(response);
  return response;
}
