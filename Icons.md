Time: 20200303
Link: react-icons.netlify.com
License: Apache，不是那么开放

### 安装

`yarn add react-icons`

### 使用
`import {ICON_NAME} from 'react-icons/fa'`
`import {ICON_NAME} from 'react-icons/md'`

**示例：**

```js
import React from 'react';
import { FaReact } from 'react-icons/fa'

import './App.css';

function App() {
  return (
    <div className="App">
     <FaReact color="purple" size="10rem"/>
    </div>
  );
}

export default App;
```

### 使用上下文来传递数据

```js
import React from 'react';
import { FaReact } from 'react-icons/fa'
import { MdAlarm } from 'react-icons/md'
import { IconContext } from 'react-icons'

import './App.css';

function App() {
  return (
    <IconContext.Provider value={{color: 'blue', size: '5em'} }>
    
      <div className="App">
        <FaReact />
        <MdAlarm />
      </div>

    </IconContext.Provider>
  );
}

export default App;

```

### 设置优先级

在元素上设置即可重定义样式。

```js
<IconContext.Provider value={{color: 'blue', size: '5em'} }>
    
      <div className="App">
        <FaReact />
        <MdAlarm color="purple"/>
      </div>

    </IconContext.Provider>
```

END.