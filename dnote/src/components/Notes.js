import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./styles/Notes.css"
import FileSystem from './FileDir.js';


 
var notes = {
 root1: "1. loot\n2. kill\n3. return",
 root2: "The way a crow\nshook down on me\n",
 root3: '',
 root4: "",

}



class Notes extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: "do your best!", 
                   newItem: "", 
                   counter: 0, 
                   fileSelection: ""} // You can also pass a Quill Delta here

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSelect = this.handleSelect.bind(this);

    this.fileRef = React.createRef();
  }
 
  handleChange(value) {
    this.setState({ text: value })
  }



  handleSelect(event, value) {
    event.preventDefault();
    var clean = value.replace('/', '');
    notes[this.state.fileSelection] = this.state.text;
    this.setState({ fileSelection: clean });
    this.setState({ text: notes[clean] });
  }

 
  handleClick(event) {
    event.preventDefault();
    
    if(event.target.name === "file")
    {
      console.log(this.fileRef.props.selected);
    }
    else
    {
      console.log("ya");
    }

    this.setState((state) => {
      return {counter : state.counter + 1, newName: ''};
    });
  }

  handleInput(event) {
    event.preventDefault();
    this.setState({newItem : event.target.value});
  }




  render() {
    return (
      
      <div className="row">
        <div className="col-n-1">

        <div className="psu-row">
          <FileSystem  ref={this.fileRef} handleSelect={this.handleSelect}/>
        </div>

        <div className="psu-row-add">

        <form onSubmit={this.handleClick} name="file">
              <div>
              <input type="text" name="file" value={this.state.newName} onChange={event => this.handleInput(event)} />
              <input type="submit" value="File" />
              </div>
              
            </form>
        </div>
          
        <div className="psu-row-add">
          <form onSubmit={this.handleClick} name="folder">
            <div>
              <input type="text" name="folder" value={this.state.newName} onChange={event => this.handleInput(event)} />
              <input type="submit" value="Folder" />
            </div>
              
          </form>
          
        </div>

        </div>

        <div className="col-n-2">
          <div className="Notes-body">
               <ReactQuill theme="snow" value={this.state.text} onChange={this.handleChange} />
          </div>
          <div className="psu-row-add">
            <form onSubmit={this.handleClick}>
              <div>
              <input type="text" name="name" value={this.state.newName} onChange={event => this.handleInput(event)} />
              <input type="submit" value="Save" />
              </div>
              
            </form>
          </div>
         
        </div>
          
      </div>


 
    );
  }
}

export default Notes;

/*
var fileOptions = [
  { value: 'TODO', label: 'TODO' },
  { value: 'Poem', label: 'Poem' },
];
 
var notes = {
 TODO: "1. loot\n2. kill\n3. return",
 Poem: "The way a crow\nshook down on me\n",
 backstories:  '',
 goals: "",

}

var folders = {Misc: {options:  [  { value: 'TODO', label: 'TODO' },
                                   { value: 'Poem', label: 'Poem' }],
                                     },
               Party: {options: [{ value: 'backstories', label: 'backstories' }, 
                                 { value: 'goals', label: 'goals' }], 
                                 }, 
               Kingdoms: {options: [{ value: 'Alopecia', label: 'Alopecia' }, 
                                    { value: 'Sweden', label: 'Sweden' }], 
                                    }};


var folderOptions = [
  { value: 'Misc', label: 'Misc' },
  { value: 'Party', label: 'Party' },
  { value: 'Kingdoms', label: 'Kingdoms' }
];



class Notes extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: "do your best!", 
                   newName: '', 
                   counter: 0, 
                   folderSelection: folderOptions[0],
                   options: folders.Misc.options,
                   fileSelection: folders.Misc.options[0],
                   notes: folders.Misc.notes} // You can also pass a Quill Delta here

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleChange(value) {
    this.setState({ text: value })
  }

  handleFileSelection = fileSelection => {
    notes[this.state.fileSelection.value] = this.state.text;
    this.setState({ fileSelection });
    this.setState({ text: notes[fileSelection.value] });
  };

  handleFolderSelection = folderSelection => {
    this.setState({ folderSelection});
    console.log(folderSelection);
    this.setState({ options: folders[folderSelection.value].options });
  };


 
  handleClick(event) {
    event.preventDefault();
    this.state.options.push({value:this.state.newName, label: this.state.newName});
    notes[this.state.newName] = {name: this.state.newName, content: this.state.text};
      this.setState((state) => {
        return {counter : state.counter + 1, newName: ''};
      });
  }

  handleInput(event) {
    event.preventDefault();
    this.setState({newName : event.target.value});
  }

  handleSubmit(event) {

  }



  render() {
    return (
      
      <div className="row">
        <div className="col-n-1">

        <div className="psu-row-sel-2">
            <form onSubmit={this.handleSubmit}>
                                  
                <div className="psu-row-sel">
                    <Select
                    value={this.state.folderSelection}
                    onChange={this.handleFolderSelection}
                    options={folderOptions} />
                </div>
                
                
            </form>
          </div>
          
          <div className="psu-row">
            <form onSubmit={this.handleSubmit}>
                                  
                <div className="psu-row-sel">
                    <Select
                    value={this.state.fileSelection}
                    menuIsOpen={true}
                    defaultMenuIsOpen={true}
                    onChange={this.handleFileSelection}
                    options={this.state.options} />
                </div>
                
                
            </form>
          </div>
          

        </div>

        <div className="col-n-2">
          <div className="Notes-body">
               <ReactQuill theme="snow" value={this.state.text}
               onChange={this.handleChange} />
          </div>
          <div className="psu-row-add">
            <form onSubmit={this.handleClick}>
              <div>
              <input type="text" name="name" value={this.state.newName} onChange={event => this.handleInput(event)} />
              <input type="submit" value="Save" />
              </div>
              
            </form>
          </div>
         
        </div>
          
      </div>


 
    );
  }
}

export default Notes;

*/