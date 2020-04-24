import React from 'react';
import "./Tracker.css";





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

/*
function Header(input) {
  return (
    <tr>
      {input.entries.map((name, index) => (<th>{name}</th>))}
    </tr>
  );
}*/


class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: ["Name", "AC", "HP", "Init"],
      materials: props.data
    };

    this.handleClick = this.handleClick.bind(this); 
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
    console.clear();
    console.log(JSON.stringify(this.state.materials));
    return (
      <div>
        <table className="table table-bordered">
            <thead>
              <tr>
                
                <th className="th-name">Name</th>
                <th className="th-num">AC</th>
                <th className="th-num">HP</th>
                <th className="th-num">Init</th>
              </tr>
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

      
        <button onClick={this.handleClick}>Add Row</button>
      </div>
    );
  }
}





export default Table;