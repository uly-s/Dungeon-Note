import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './react-tabs.css';
import  Timeline  from './Timeline.js';
import Map from "./Map.js";
//import Timeline from "./Timeline";
//import AddTLI from "./Timeline";






function App() {
  return (
    <div className="App">
      <header className="App-header">

      <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <div>
            <Timeline/>
          </div>
        </TabPanel>

        <TabPanel>
          
          <div>
            <Map />
          </div> 
          
        </TabPanel>


      </Tabs>

      </header>
    </div>
  );
}

export default App;
