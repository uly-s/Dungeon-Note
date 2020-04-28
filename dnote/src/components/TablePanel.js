import React, {Component} from 'react';
import Table from './Table.js';



var tables = {one: {cols: ["Name", "Level", "HP"], rows: [{ Name: 'Dave', Level: '5', HP: '70/80' },
                                                           {  Name: 'Loreala', Level: '5', HP: '65/70' },
                                                           { Name: 'Bowie', Level: '10', HP: '99/100' },
                                                           { Name: 'Dean Hougen', Level: '99', HP: '999/999' }]},
              two: {cols: ["City", "Population", "Region", "Climate"], rows: [{City:'Gondor', Population:'12,421', Region:'Middle-Earth?', Climate:'Unpleasent'},
              {City:'Balbad', Population:'167,321', Region:'Angbar', Climate:'Temperate'},
              {City:'', Population:'', Region:'', Climate:''}]},
            three: {cols: ["Spell", "Class"], rows: [{Spell:'Magic Missile', Class:'Wizard'},
                                                          {Spell:'Lightning Bolt', Class:'Any'},
                                                          {Spell:'Pocket Sand', Class:'Dale Gribble'},
                                                          {Spell:'Cure Sadness', Class:'NULL'},
                                                          {Spell:'', Class:''},
                                                          {Spell:'', Class:''}]}
};




class TablePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {active: "one", selection: "one", header: tables.one.cols, data: tables.one.rows};
    this.tableRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    console.log(this.state.selection);
    this.setState({selection: event.target.value});
    
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState((state) => { return {active: state.selection}; } );
    this.tableRef.current.refresh(tables[this.state.active].cols, tables[this.state.active].rows);
  }




  render() {
    return (
      <div>
        <div className="row">
          <div className="col-t-1">

          

            </div>

        <div className="col-t-2">
        <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                Pick a table:
              
              </label>
              <select value={this.state.selection} onChange={this.handleChange}>
                  <option value="one">one</option>
                  <option value="two">two</option>
                  <option value="three">three</option>

                </select>
              <input type="submit" value="Submit" />
          
            
            </form>

            </div>
          <div>
          <Table ref={this.tableRef} header={this.state.header} data={this.state.data}/>
          </div>
          
        </div>

        <div className="col-t-3">

        </div>
        </div>
         
        
        
        
        

        
      </div>

      

    );
  }

}


export default TablePanel;