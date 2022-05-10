import { cdk } from 'projen';
import { TrailingComma } from 'projen/lib/javascript';
const project = new cdk.JsiiProject({
  author: 'martinmueller.dev',
  authorAddress: 'damadden88@googlemail.com',
  defaultReleaseBranch: 'main',
  name: 'aws-accounts',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/mmuller88/aws-accounts',
  eslint: true,
  prettier: true,
  prettierOptions: {
    settings: {
      singleQuote: true,
      trailingComma: TrailingComma.ALL,
    },
  },
  bundledDeps: ['aws-sdk'],
  devDeps: ['commithelper', 'husky', 'lint-staged'],
  release: true,
  keywords: ['audit', 'organizations', 'account', 'aws-sdk'],
  autoApproveOptions: {
    allowedUsernames: ['aws-cdk-automation', 'github-bot'],
    secret: 'GITHUB_TOKEN',
  },
  publishToPypi: {
    distName: 'aws-accounts',
    module: 'aws_accounts',
  },
  // publishToNuget: {
  //   dotNetNamespace: 'com.github.mmuller88',
  //   packageId: 'com.github.mmuller88.awsAccounts',
  // },
});

project.prettier?.addIgnorePattern('.eslintrc.json');
project.prettier?.addIgnorePattern('tsconfig.dev.json');
project.prettier?.addIgnorePattern('tsconfig.json');

project.package.addField('lint-staged', {
  '*.(ts|tsx)': ['eslint --fix'],
  '*.(ts|tsx|js|jsx|json)': ['prettier --write'],
});
project.setScript('lint:staged', 'lint-staged');

project.setScript('prepare', 'husky install');

// project.package.addField('commithelper', {
//   scopes: ['dashboard', 'landingpage', 'backend', 'docs'],
// });

// project.tsconfigDev?.addInclude('backend/**/*.ts');

project.synth();
