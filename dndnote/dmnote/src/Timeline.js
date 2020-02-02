import React from 'react';

import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';



var elements = [    <TimelineItem 
  key="001" 
  dateText="11/2010 – Present" 
  dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
  bodyContainerStyle={{
    background: '#ddd',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
  }}>
    <h>YO</h>
    <p>booooiii</p>
</TimelineItem>, 

<TimelineItem 
key="002" 
dateText="11/2010 – Present" 
dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
bodyContainerStyle={{
  background: '#ddd',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
}}>
  <h>YO</h>
  <p>booooiii</p>
</TimelineItem> ]



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
      <TimelineItem 
        key="004" 
        dateText="11/2010 – Present" 
        dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
        bodyContainerStyle={{
          background: '#ddd',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
        }}>
          <h>YO</h>
          <p>{this.state.comment}</p>
      </TimelineItem>);

    
    this.setState((state) => {
      return {counter : state.counter + 1, comment: ''};
    });
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
          Name:
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