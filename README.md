# amboss-pipeline-analyser
=======================

example multi-command CLI built with typescript

[![Version](https://img.shields.io/npm/v/@oclif/example-multi-ts.svg)](https://npmjs.org/package/@alexjeffcott/amboss-pipeline-analyser)
[![CircleCI](https://circleci.com/gh/AlexJeffcott/amboss-pipeline-analyser/tree/master.svg?style=shield)](https://circleci.com/gh/AlexJeffcott/amboss-pipeline-analyser/tree/master)
[![Codecov](https://codecov.io/gh/alexjeffcott/amboss-pipeline-analyser/branch/master/graph/badge.svg)](https://codecov.io/gh/alexjeffcott/amboss-pipeline-analyser)
[![Downloads/week](https://img.shields.io/npm/dw/@alexjeffcott/amboss-pipeline-analyser.svg)](https://npmjs.org/package/@alexjeffcott/amboss-pipeline-analyser)
[![License](https://img.shields.io/npm/l/@alexjeffcott/amboss-pipeline-analyser.svg)](https://github.com/alexjeffcott/amboss-pipeline-analyser/blob/master/package.json)

## Working from the template github repo
### Generate a repo from the template
Go to the [template repo](https://github.com/AlexJeffcott/typescript-cli-template) and create the new repo with the name of your project.
Then clone the repo on your machine as usual.
```
git clone GH_CLONE_STRING
cd PROJECT_NAME
```

### Give it a name
After cloning the repo global search and replace `typescript-cli-template` with your project name.
Also do this with the command that you will want users to use for your application by global search and replacing `typescriptclitemplate` with your desired command.
Please ensure that these changes have taken place everywhere including hidden directories. You may want to completely remove things like the `.idea` folder, for example.

### Set the version
Ensure the version in package.json is `1.0.0` as a starting point. 
Subsequent versions should be bumped using the appropriate npm scripts.

### Make it a github repo
See [here](https://github.com/AlexJeffcott/amboss-pipeline-analyser).

Here this can be found as `AlexJeffcott/amboss-pipeline-analyser`

### Set up codecov.io
See [here](https://codecov.io/gh/AlexJeffcott/amboss-pipeline-analyser).

This is very easy to set up - just create an account, or login, link the repo and copy the token.

### Put it in CI/CD
See [here](https://app.circleci.com/pipelines/github/AlexJeffcott/amboss-pipeline-analyser).

This project uses circleci. This is very easy to set up - just create an account, or login, link the repo and tell it to use the config that already exists.
Go to `project settings/Environment Variables` and add `CODECOV_TOKEN` with the token gleaned from codecov.io above.

### Make it an npm package
Here this can be found as `@alexjeffcott/amboss-pipeline-analyser`
NB this must be unique in npm registry, otherwise you will get confusing/misleading error messages.

#### Sign in to npm and publish
You must have an npm account, and the user must be able to create/publish packages.

<!-- toc -->
* [amboss-pipeline-analyser](#amboss-pipeline-analyser)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @alexjeffcott/amboss-pipeline-analyser
$ analyse-pipeline COMMAND
running command...
$ analyse-pipeline (-v|--version|version)
@alexjeffcott/amboss-pipeline-analyser/1.0.4 darwin-x64 node-v12.18.3
$ analyse-pipeline --help [COMMAND]
USAGE
  $ analyse-pipeline COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`analyse-pipeline goodbye [FILE]`](#analyse-pipeline-goodbye-file)
* [`analyse-pipeline hello [FILE]`](#analyse-pipeline-hello-file)
* [`analyse-pipeline help [COMMAND]`](#analyse-pipeline-help-command)

## `analyse-pipeline goodbye [FILE]`

describe the command here

```
USAGE
  $ analyse-pipeline goodbye [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/goodbye.ts](https://github.com/AlexJeffcott/amboss-pipeline-analyser/blob/v1.0.4/src/commands/goodbye.ts)_

## `analyse-pipeline hello [FILE]`

describe the command here

```
USAGE
  $ analyse-pipeline hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $analyse-pipeline hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/AlexJeffcott/amboss-pipeline-analyser/blob/v1.0.4/src/commands/hello.ts)_

## `analyse-pipeline help [COMMAND]`

display help for analyse-pipeline

```
USAGE
  $ analyse-pipeline help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_
<!-- commandsstop -->
