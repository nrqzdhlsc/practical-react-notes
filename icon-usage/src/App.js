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
        <MdAlarm color="purple"/>
      </div>

    </IconContext.Provider>
  );
}

export default App;
