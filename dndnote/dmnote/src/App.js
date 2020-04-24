import React from 'react';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './react-tabs.css';
import  Timeline  from './components/Timeline.js';
import Map from "./components/MapPanel.js";
import TablePanel from "./components/TablePanel.js";
import Tracker from "./components/Tracker.js";

//import Timeline from "./Timeline";
//import AddTLI from "./Timeline";

class App extends React.Component {
  constructor(props)
  {
    super(props);

    this.state = { data: [], firstName: "", lastName: "" };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Tabs>
          <TabList>
            <Tab>Map</Tab>
            <Tab>Timeline</Tab>
            <Tab>Tables</Tab>
            <Tab>Initiative</Tab>
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

          <TabPanel>
            <div>
              <TablePanel/>
            </div>
          </TabPanel>

          <TabPanel>
            <div>
              <Tracker/>
            </div>
          </TabPanel>
          
          
        
        </Tabs>
        </header>

        <body className="App-body">
        
        </body>
      </div>
    );
  }
}

export default App;