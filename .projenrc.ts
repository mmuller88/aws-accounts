import { cdk } from "projen";
const project = new cdk.JsiiProject({
  author: "martinmueller.dev",
  authorAddress: "damadden88@googlemail.com",
  defaultReleaseBranch: "main",
  name: "aws-accounts",
  projenrcTs: true,
  repositoryUrl: "https://github.com/mmuller88/aws-accounts",

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();