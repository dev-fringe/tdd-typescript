# Test Alsatian typescript test framework

This is from the Alsatian wiki [here](https://github.com/alsatian-test/alsatian/wiki/test-structure).

# Creating
Add typescript and alstain as devDependencies:
```
yarn add typescript alsatian -D
```
Then added the test script `alsatian example.spec.js` to package.json:
```
$ cat package.json
{
  "scripts": {
    "pretest": "tsc",
    "test": "alsatian example.spec.js"
  },
  "devDependencies": {
    "alsatian": "^1.2.1",
    "typescript": "^2.2.1"
  }
}
```
And added tsconfig.json
```
$ cat tsconfig.json 
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es6",
        "sourceMap": true,
        "allowJs": false,
        "alwaysStrict": true,
        "noImplicitAny": true,
        "noImplicitReturns": true,
        "noImplicitThis": true,
        "noEmitOnError": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "declaration": true,
        "experimentalDecorators": true,
        "forceConsistentCasingInFileNames": true,
        "strictNullChecks": true
    },
    "include": [
      "example.spec.ts"
    ],
    "exclude": [
      "node_modules"
    ]
}
```

# Run

```
$ yarn test
yarn test v0.20.3
$ tsc
ExampleTestFixture
exampleTest
|====================|

Pass: 1/1
Fail: 0/1
Ignore: 0/1
Done in 2.01s.
```
