## Install

`npm i singing-npm-package-first-test`

## Useage

### esm

```
import { Button, Component, testFunc, AlertComponent } from 'singing-npm-package-first-test';

<Component title={'This is TITLE'}>
  <Button primary={true} onClick={() => testFunc()}>Hi Hi</Button>
</Component>
<AlertComponent />
```

### umd

html

```
<script
  src="https://unpkg.com/react@latest/umd/react.development.js"
  crossorigin="anonymous"
></script>
<script src="https://unpkg.com/react-dom@latest/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/singing-npm-package-first-test@latest/umd/index.js" crossorigin="anonymous"></script>
```

component

```
const myLib = window.myLib;
const { Button, Component, testFunc, AlertComponent } = myLib;

<Component title={'This is TITLE'}>
  <Button primary={true} onClick={() => testFunc()}>Hi Hi</Button>
</Component>
<AlertComponent />
```
