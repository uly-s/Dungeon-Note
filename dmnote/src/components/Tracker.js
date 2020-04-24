import React from 'react';
import './Tracker.css';
import { Button } from 'reactstrap';
import Table from './Table.js';

var rolls = ['booga booga boo\n'];

var columns = ["Name", "AC", "HP", "Init"];
var entities = [{Name:"", AC:"", HP:"", Init:""}];


class Tracker extends React.Component {

  constructor(props) {
    super(props)
    this.state = { numRolls : 0, roll:'', rows:entities};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({numRolls:rolls.push(this.state.roll)});
  }

  handleInput(event) {
    event.preventDefault();
    this.setState({roll : event.target.value});
  }

  render() {
    return (
      <body className="App-body">
        <div class="row">
          <div class="col-1">
            <Table header={columns} data={entities}/>            
            </div> 
          <div class="col-2">
          
            
          </div> 

          <div class="col-3">
            <div>
                <Button>d4</Button>
                <Button>d6</Button>
              </div>
              <div>
                <Button>d10</Button>
                <Button>d12</Button>
              </div>
              <div>
                <Button>d20</Button>
                <Button>d100</Button>
              </div>  
              
              <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" value={this.state.comment} onChange={event => this.handleInput(event)} />
                <input type="submit" value="Submit" />
              </form>
          </div> 
          <div class="col-4">  
           <textarea readOnly="true" rows="40" cols="50" value={rolls}></textarea>
          </div> 
        </div>
      </body>
      
    )
  }
}

export default Tracker;