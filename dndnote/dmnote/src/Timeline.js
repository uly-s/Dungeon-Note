import React from 'react';

import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

var innerDateStyle = { background: '#61b8ff', color: '#000' };

var bodyContStyle = { background: '#ddd', padding: '20px', borderRadius: '8px', 
                        boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)'};


function element(_key, head, body) {
  return (
    <TimelineItem 
      key={_key}
      dateText="11/2010 – Present" 
      dateInnerStyle={innerDateStyle}
      bodyContainerStyle={bodyContStyle}>
        <h>{head}</h>
        <p>{body}</p>
    </TimelineItem>
  )
}



var elements = [   
  element("001", "head 0", "body body body 0"), 
  element("002", "head 1", "body body body 1"),
  element("002", "head 2", "body body body 2")
 ]



class TimelineWithButton extends React.Component {



  constructor(props) {
    super(props)

    this.state = {counter : elements.length, comment : ''};

    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);


  }

  handleClick(event) {
    event.preventDefault();
    elements.push(
      element("00" + this.state.counter, "hoodle doodle", this.state.comment));
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
      <h>{this.state.counter}</h>
      <form onSubmit={this.handleClick}>
        <label>
          Event:
          <input type="text" name="name" value={this.state.comment} onChange={event => this.handleInput(event)} />
        </label>
        <input type="submit" value="Submit" />
    </form>
      <Timeline lineColor={'#ddd'}>{elements}</Timeline>
    </div>
    
    );
  }
}

export default TimelineWithButton;