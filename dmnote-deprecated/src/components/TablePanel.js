import React, {Component} from 'react';
import Table from './Table.js';
import { Button } from 'react-bootstrap';


var tables = {"one": {name: "one", cols: ["Name", "Level", "HP"], rows: [{ Name: '', Level: '', HP: '' },
                                                           {  Name: '', Level: '', HP: '' },
                                                           { Name: '', Level: '', HP: '' },
                                                           { Name: '', Level: '', HP: '' }]},
              "two": {name: "two", cols: ["City", "Population", "Region", "Climate"], rows: [{City:'', Population:'', Region:'', Climate:''},
              {City:'', Population:'', Region:'', Climate:''},
              {City:'', Population:'', Region:'', Climate:''}]}
};

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleInput = props.handleInput.bind(this);
  }

  render() {
    return (
      <td>
      <input onChange={this.handleInput} 
              type='text' 
              className='form-control' 
              value={this.props.value}/>
    </td>

    );
  }
}

function Header(input) {
  return (
    <tr>
      {input.entries.map((name, index) => (<th>{name}</th>))}
    </tr>
  );
}

class TablePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {comment: 'none', selection: "one", old:'one', materials: tables.one.rows, header: tables.one.cols};

    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this); 
  }

  handleChange1(event) {
    event.preventDefault();
    this.setState({old : this.state.selection, selection: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    tables[this.state.old].rows = this.state.materials;
    this.setState((state) => {
      return {header: tables[this.state.selection].cols, materials: tables[this.state.selection].rows};
        }
  );
    
    

    console.log(this.state.materials);
  }



  handleInput(event) {
    event.preventDefault();
    this.setState({comment : event.target.value});
  }

  handleClick(event) {
    event.preventDefault();
      let cols = this.state.header;
      let rows = this.state.materials;
      let newRow = {};

      for (let i = 0; i < cols.length; i++)
        newRow[cols[i]] = '';
      
      rows.push(newRow);


      this.setState((state) => {
        return {materials : rows};
          }
    );
  }

  handleChange(index, dataType, value) {
    const newState = this.state.materials.map((item, i) => {
      if (i === index) {
        return {...item, [dataType]: value};
      }
      return item;
    });

    this.setState({
       materials: newState
    });
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Pick a table:
              <select value={this.state.selection} onChange={this.handleChange1}>
                <option value="one">one</option>
                <option value="two">two</option>

              </select>
            </label>
            <input type="submit" value="Submit" />

            <table className="table table-bordered">
            <thead>
                <Header entries={this.state.header}/>
            </thead>
            <tbody>
            {this.state.materials.map((row, j) => {
                    return (
                        <tr>
                          {this.state.header.map((col, i) => 
                            (<Cell handleInput={(e) => this.handleChange(j, this.state.header[i], e.target.value)} 
				                           value={this.state.materials[j].i} /> ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>

          </form>
        </div>
        
        <div>
        
      
        <button onClick={this.handleClick}>Add Row</button>
      </div>
        

        
      </div>

      

    );
  }

}


export default TablePanel;