import React from 'react';

import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

var innerDateStyle = { background: '#61b8ff', color: '#000' };

var bodyContStyle = { background: '#ddd', padding: '10px', borderRadius: '8px', 
                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'};


var dateIdx = 0;
var dateString = "3209/12/";

function date(){
  dateIdx += 1;
  return dateString + dateIdx;
}


function element(_key, head, body) {
  return (
    <TimelineItem 
      key={_key}
      dateText={date()} 
      dateInnerStyle={innerDateStyle}
      bodyContainerStyle={bodyContStyle}>
        <p>{body}</p>
    </TimelineItem>
  )
}



var elements = [   
  element("1", "head 0", "met a dwarf"), 
  element("2", "head 1", "got lost in a cave")
 ]



class TimelineWithButton extends React.Component {



  constructor(props) {
    super(props)

    this.state = {counter : elements.length + 1, comment : ''};

    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);


  }

  handleClick(event) {
    event.preventDefault();
    elements.push(
      element("" + this.state.counter, "hoodle doodle", this.state.comment));
      this.setState((state) => {
        return {counter : state.counter + 1, comment: ''};
          }
    );
  }

  handleInput(event) {
    event.preventDefault();
    this.setState({comment : event.target.value});
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
    <div>
      <form onSubmit={this.handleClick}>
        <div>
        <label>
          Event:
          
        </label>
          <input type="text" name="name" value={this.state.comment} onChange={event => this.handleInput(event)} />
          <input type="submit" value="Submit" />
        </div>
       
        
    </form>
      <Timeline lineColor={'#ddd'}>{elements}</Timeline>
    </div>
    
    );
  }
}

export default TimelineWithButton;