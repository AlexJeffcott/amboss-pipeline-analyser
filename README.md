typescript-cli-template
=======================

example multi-command CLI built with typescript

[![Version](https://img.shields.io/npm/v/@oclif/example-multi-ts.svg)](https://npmjs.org/package/@alexjeffcott/typescript-cli-template)
[![CircleCI](https://circleci.com/gh/AlexJeffcott/typescript-cli-template/tree/master.svg?style=shield)](https://circleci.com/gh/AlexJeffcott/typescript-cli-template/tree/master)
[![Codecov](https://codecov.io/gh/alexjeffcott/typescript-cli-template/branch/master/graph/badge.svg)](https://codecov.io/gh/alexjeffcott/typescript-cli-template)
[![Downloads/week](https://img.shields.io/npm/dw/@alexjeffcott/typescript-cli-template.svg)](https://npmjs.org/package/@alexjeffcott/typescript-cli-template)
[![License](https://img.shields.io/npm/l/@alexjeffcott/typescript-cli-template.svg)](https://github.com/alexjeffcott/typescript-cli-template/blob/master/package.json)

## Give it a name
Here this can be found as `typescript-cli-template`

## Define a command
Here this can be found as `typescriptclitemplate`

## Set the version
Ensure the version in package.json is `1.0.0` as a starting point. 
Subsequent versions should be bumped using the appropriate npm scripts.

## Make it a github repo
See [here](https://github.com/AlexJeffcott/typescript-cli-template).

Here this can be found as `AlexJeffcott/typescript-cli-template`

## Set up codecov.io
See [here](https://codecov.io/gh/AlexJeffcott/typescript-cli-template).

This is very easy to set up - just create an account, or login, link the repo and copy the token.

## Put it in CI/CD
See [here](https://app.circleci.com/pipelines/github/AlexJeffcott/typescript-cli-template).

This project uses circleci. This is very easy to set up - just create an account, or login, link the repo and tell it to use the config that already exists.
Go to `project settings/Environment Variables` and add `CODECOV_TOKEN` with the token gleaned from codecov.io above.

## Make it an npm package
Here this can be found as `@alexjeffcott/typescript-cli-template`
NB this must be unique in npm registry, otherwise you will get confusing/misleading error messages.

#### Sign in to npm and publish
You must have an npm account, and the user must be able to create/publish packages.

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @alexjeffcott/typescript-cli-template
$ typescriptclitemplate COMMAND
running command...
$ typescriptclitemplate (-v|--version|version)
@alexjeffcott/typescript-cli-template/1.1.0 darwin-x64 node-v12.18.3
$ typescriptclitemplate --help [COMMAND]
USAGE
  $ typescriptclitemplate COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`typescriptclitemplate goodbye [FILE]`](#typescriptclitemplate-goodbye-file)
* [`typescriptclitemplate hello [FILE]`](#typescriptclitemplate-hello-file)
* [`typescriptclitemplate help [COMMAND]`](#typescriptclitemplate-help-command)

## `typescriptclitemplate goodbye [FILE]`

describe the command here

```
USAGE
  $ typescriptclitemplate goodbye [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/goodbye.ts](https://github.com/AlexJeffcott/typescript-cli-template/blob/v1.1.0/src/commands/goodbye.ts)_

## `typescriptclitemplate hello [FILE]`

describe the command here

```
USAGE
  $ typescriptclitemplate hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ test-npm-cli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/AlexJeffcott/typescript-cli-template/blob/v1.1.0/src/commands/hello.ts)_

## `typescriptclitemplate help [COMMAND]`

display help for typescriptclitemplate

```
USAGE
  $ typescriptclitemplate help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_
<!-- commandsstop -->
