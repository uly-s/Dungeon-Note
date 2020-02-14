import React from 'react';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './react-tabs.css';
import  Timeline  from './Timeline.js';
import Map from "./MapPanel.js";
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
            <Map />
          </div> 
        </TabPanel>

        <TabPanel>
          <div>
            <Timeline/>
          </div>
        </TabPanel>
        
        
      
      </Tabs>
      </header>

      <body className="App-body">
      
      </body>
    </div>
  );
}

export default App;
