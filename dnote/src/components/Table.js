import React from 'react';
import './Table.css';





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
              value={this.props.value} />
    </td>

    );
  }
}


function Header(input) {
  return (
    <tr>
      {input.entries.map((name, index) => (<th key={name}>{name}</th>))}
    </tr>
  );
}


class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: props.header,
      data: props.data
    };

    this.handleClick = this.handleClick.bind(this); 
    //this.refresh = props.refresh.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
      let cols = this.state.header;
      let rows = this.state.data;
      let newRow = {};

      for (let i = 0; i < cols.length; i++)
        newRow[cols[i]] = '';
      
      rows.push(newRow);

      this.setState((state) => { return {data : rows}; } );
  }
  handleChange(index, dataType, value) {
    const newState = this.state.data.map((item, i) => {
      if (i === index) {
        console.log(item);
        return {...item, [dataType]: value};
      }
      return item;
    });

    this.setState({
       data: newState
    });
  }

  refresh(columns, rows)
  {
    this.setState({header:columns});
    this.setState({data:rows});
  }

  

  render() {
    
    console.log(JSON.stringify(this.state.data));
    return (
      <div>
        <table className="table">
            <thead>
                <Header entries={this.state.header}/>
            </thead>
            <tbody>
            {this.state.data.map((row, j) => {
                    return (
                        <tr>
                          {this.state.header.map((col, i) => 
                            (<Cell handleInput={(e) => this.handleChange(j, this.state.header[i], e.target.value)} 
				                           value={this.state.data[j].i}  key={(i + 1) * (j + 1)}/> ))}
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

// type={i === 0 ? "name" : "num"}



export default Table;