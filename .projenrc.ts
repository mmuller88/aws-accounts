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
  deps: ['aws-sdk'],
  devDeps: ['commithelper', 'husky', 'lint-staged'],
  release: true,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
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
