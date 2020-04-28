import React from 'react';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './react-tabs.css';
import  Timeline  from './components/Timeline.js';
import Map from "./components/MapPanel.js";
import TablePanel from "./components/TablePanel.js";
import Tracker from "./components/Tracker.js";
import Notes from "./components/Notes.js";
import background from "./bg.png";


class App extends React.Component {
  constructor(props)
  {
    super(props);

    this.state = { data: [], firstName: "", lastName: "" };
  }

  render() {
    return (
      <div className="App">
        <Tabs>
        <header className="App-header">
        
          <TabList>
            <Tab>Home</Tab>
            <Tab>Map</Tab>
            <Tab>Timeline</Tab>
            <Tab>Tables</Tab>
            <Tab>Initiative</Tab>
            <Tab>Notes</Tab>
          </TabList>
          

        
        
        </header>

        <body className="App-body">

        <TabPanel>
          <div>
            <img src={background} height="700pt" width="1300pt"/>
          </div>
        </TabPanel>
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
          
          <TabPanel>
            <div>
              <Notes/>
            </div>
          </TabPanel>
        </body>
        </Tabs>
      </div>
    );
  }
}

export default App;