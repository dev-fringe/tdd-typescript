# Test Alsatian typescript test framework

This is from the Alsatian wiki [here](https://github.com/alsatian-test/alsatian/wiki/test-structure).

# Created
```
yarn add typescript alsatian -D
```
Then added the test script `alsatian example.spec.js` to package.json:
```
$ cat package.json
{
  "scripts": {
    "test": "alsatian example.spec.js"
  },
  "devDependencies": {
    "alsatian": "^1.2.1",
    "typescript": "^2.2.1"
  }
}
```

# Run

Currently the test doesn't appear to
be working I'm getting some warnings
and no other output:
```
$ yarn test
yarn test v0.20.3
$ alsatian example.spec.js 
(node:6554) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): SyntaxError: Unexpected token import
(node:6554) DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
Done in 0.34s.
```
From the [Test Structure wiki entry](https://github.com/alsatian-test/alsatian/wiki/test-structure) I should be getting:
```
> alsatian "./path/to/example.spec.js"
TAP version 13
1..1
ok 1 - exampleTest
```
