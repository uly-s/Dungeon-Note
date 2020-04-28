import React from "react";
import Map from './Map.js'


class MapPanel extends React.Component {

  constructor(props)
  {
    super(props);

    this.state = {mode: 'view',
                  annotations: [],
                  annotation: {}
                 };
  }

  render() {

    return (
      <div>
        
       <Map height="1000pt" width="900pt"/>

      </div>
    );


  }


}

/*
        <ToggleButtonGroup name={"view", "mark"} type="radio">
          <ToggleButton name="view" value="view">
            view
          </ToggleButton>
            
          <ToggleButton name="mark" value="mark">
            mark
          </ToggleButton>
        </ToggleButtonGroup>
*/


export default MapPanel;
