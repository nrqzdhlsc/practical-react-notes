import React from 'react';
// 1. 导入函数与样式
// 样式很关键，动画效果全是CSS来完成的
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './App.css';


// 2. 配置
toast.configure()

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

function App() {
  const notify = () => {
    // 3. 调用toast函数
    toast("Basic Notification on the center", 
      { 
        position: toast.POSITION.TOP_CENTER,
      }
      )
    toast.success("Success Notification on the top left",
      {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 1000,
      }
    )
    toast.warn(<CustomToast />,
      {
        position: toast.POSITION.TOP_LEFT,
      }
    )
    toast.info("Info Notification on the top right",
      {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: false // 一直在界面上
      }
    )
    toast.error("Error Notification on the top right",
      {
        position: toast.POSITION.BOTTOM_CENTER
      }
    )
  }
  return (
    <div className="App">
      <button onClick={notify}> Notify </button>
    </div>
  );
}

export default App;
