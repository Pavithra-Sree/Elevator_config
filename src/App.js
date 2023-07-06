
import './App.css';
import React from 'react';
import { Route, Routes} from 'react-router-dom';
import './components/Config.css';
import BatterySettings from './components/BatterySettings';
import Config from './components/Config';
import Nav from './NavBars/Nav';
function App() {

  return (
    <div className="App">
    <Nav/>
    <Routes>
         <Route path="/batterySettings" element={<BatterySettings/>}/>
          <Route path="/config" element={<Config />} />
    </Routes>
    </div>
  );
}

export default App;
