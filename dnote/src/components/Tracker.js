import React from 'react';
import './styles/Tracker.css';



var rolls = ['nat 20!\n', 'nat 1!\n'];

var columns = ["Name", "AC", "HP", "Init"];
var entities = [{Name:"", AC:"", HP:"", Init:""}];

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleInput = props.handleInput.bind(this);
  }

  render() {
    return (
      <td className={this.props.type === "name" ? "td-name" : "td-num"} key={this.props.id}>
      <input onChange={this.handleInput} 
              type='text' 
              className='form-control' 
              value={this.props.value} 
              width={this.props.type === "name" ? "20px" : "5px"}
              overflow="hidden"/>
    </td>

    );
  }
}



class Tracker extends React.Component {

  constructor(props) {
    super(props)
    this.state = { numRolls : 0, roll:'', header: ["Name", "AC", "HP", "Init"], feed: rolls[0] + rolls[1],
    materials: entities};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this); 
    this.handleButton = this.handleButton.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState((state) => { 
      if(state.roll.length > 0)
        return {feed: state.feed + state.roll + "\n", roll: ''};
    }
  );
  }

  handleInput(event) {
    event.preventDefault();
    this.setState({roll : event.target.value});
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

  handleButton(val) {
    let oldRoll = this.state.roll;

    let newRoll = oldRoll;

    if (oldRoll.length > 0)
      newRoll += " + ";

    newRoll += "d" + val;

    this.setState({roll: newRoll});
  }

  render() {
    return (
      <div className="Tracker-body">
        <div className="row">
          <div className="col-1">
          <div>
        <table className="table-t">
            <thead>
              <tr>
                <th key="Name" className="th-name">Name</th>
                <th key="AC" className="th-num">AC</th>
                <th key="HP" className="th-num">HP</th>
                <th key="Init" className="th-num">Init</th>
              </tr>
            </thead>
            <tbody>
            {this.state.materials.map((row, j) => {
                    return (
                        <tr>
                          {this.state.header.map((col, i) => 
                            (<Cell handleInput={(e) => this.handleChange(j, this.state.header[i], e.target.value)} 
				                           value={this.state.materials[j].i} type={i === 0 ? "name" : "num"} id={(i + 1) * (j + 1)}/> ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>

      
        <button onClick={this.handleClick}>Add Row</button>
      </div>          
            </div> 
          <div className="col-2">
          
            
          </div> 

          <div className="col-3">

            <div>
              <button className="button" onClick={() => this.handleButton("4")}>d4</button>
              <button className="button" onClick={() => this.handleButton("6")}>d6</button>
            </div>
            <div>
              <button className="button" onClick={() => this.handleButton("8")}>d8</button>
              <button className="button" onClick={() => this.handleButton("10")}>d10</button>
            </div>
            <div>
              <button className="button" onClick={() => this.handleButton("12")}>d12</button>
              <button className="button" onClick={() => this.handleButton("20")}>d20</button>
            </div>
            

            

            <div>
              <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" value={this.state.roll} onChange={event => this.handleInput(event)} />
                <input type="submit" value="Submit" />
              </form>
            </div>
           
          </div> 
          <div className="col-4">  
            
              <textarea className="field" readOnly={true} rows="40" cols="50" value={this.state.feed}/>
            
          </div> 
        </div>
      </div>
      
    )
  }
}

export default Tracker;