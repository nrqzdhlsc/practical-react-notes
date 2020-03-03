Time: 20200303
Link: https://fkhadra.github.io/react-toastify
https://github.com/fkhadra/react-toastify
License: MIT

### 安装

`yarn add react-toastify`

### 使用

```js
import React from 'react';
// 1. 导入函数与样式
// 样式很关键，动画效果全是CSS来完成的
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './App.css';
// 2. 配置
toast.configure()

function App() {
  const notify = () => {
    // 3. 调用toast函数
    toast("Basic Notification~")
  }
  return (
    <div className="App">
      <button onClick={notify}> Notify </button>
    </div>
  );
}

export default App;
```
默认样式是在屏幕右边，这些基础的位置属性都是可以设置的。

### 更多Fancy的用法

具体配置放在`toast`函数中即可。

几种类型的吐司通知：

```js
toast("Basic Notification on the center", 
      { 
        position: toast.POSITION.TOP_CENTER
      }
      )
    toast.success("Success Notification on the top left",
      {
        position: toast.POSITION.TOP_LEFT
      }
    )
    toast.info("Info Notification on the top right",
      {
        position: toast.POSITION.TOP_RIGHT
      }
    )
    toast.error("Error Notification on the top right",
      {
        position: toast.POSITION.BOTTOM_CENTER
      }
    )
```
**设置持续时间：**

使用`autoClose`属性。

```js
 toast.success("Success Notification on the top left",
      {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 1000,
      }
    )
    toast.info("Info Notification on the top right",
      {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: false // 一直在界面上
      }
    )
```
### 自定义Toast

```js
// 自定义toast
const CustomToast = ({ closeToast }) => {
  return (
    <div>
      Something went wrong.
      <button onClick={closeToast}>
        Close
      </button>
    </div>
  )
}
// 使用
toast.warn(<CustomToast />,
      {
        position: toast.POSITION.TOP_LEFT,
      }
)
```
END.
