import * as AWS from 'aws-sdk';

AWS.config.update({ region: 'us-east-1' });

const org = new AWS.Organizations();

export async function deleteAccount(accountId: string) {
  const closeAccountRequestParams: AWS.Organizations.Types.CloseAccountRequest =
    {
      AccountId: accountId,
    };

  console.debug(
    `closeAccountRequestParams=${JSON.stringify(closeAccountRequestParams)}`,
  );
  const response = await org.closeAccount(closeAccountRequestParams).promise();
  console.debug(response);

  return response;
}
