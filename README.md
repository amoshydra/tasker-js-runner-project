# tasker-js-runner-project

A sample project that make use of https://github.com/amoshydra/tasker-js-runner

See [Tasker-JS-Runner](https://github.com/amoshydra/tasker-js-runner) for details on using the library and set up on your Tasker.

## Install
```
npm install
```

## Usage

| Commands    | Description |
| --- | --- |
| `npm run dev`   | Watch for code change and serve the bundled javascript file from `dist/index.js`. By default the server will be listening on `localhost:8080` |
| `npm run build` | Build a javascript file into `dist/index.js`. You may manually transfer this file into your Android device. |
| `npm run watch` | Used by `npm run dev`. Rebundle javascript file when it detected any change in the source code.
| `npm run serve` | Used by `npm run dev`. Create a server that serve `dist/index.js`
