# For loops benchmark inspired on Misko Hevery talk @ AngularConnect 2019 

[Original Slides](https://docs.google.com/presentation/d/1o5W1sOaQ0HaPqleGCWy8cukgM5NhhRZWpx2E6KKrc10) for [How we make Angular fast](https://www.angularconnect.com/talks#misko-hevery).

## Install dependencies

```
npm install
```

## Compile it
```
npm run watch
```

## `forLoops1.js`

Demonstrates inlining.
```
node ./dist/forLoops1.js 100000
./node_modules/.bin/deoptigate ./dist/forLoops1.js 10000000
```


## `forLoops2.js`

Demonstrates stable numbers.
```
node ./dist/forLoops2.js
./node_modules/.bin/deoptigate ./dist/forLoops2.js
```