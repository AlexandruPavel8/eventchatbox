import React, { Component } from 'react';

import Event from '../component/Event';
import WriteBox from '../component/WriteBox';

import getRandomEvent from '../util/RandomGenerator';

import { withStyles } from '@material-ui/core/styles';
import {eventChatBoxStyles} from './style/EventChatBoxStyle';

class EventChatBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      eventArray : [],
    }; 

    this.addWriteEventToChatBox = this.addWriteEventToChatBox.bind(this);
    this.addRandomPersonEventToChatBox = this.addRandomPersonEventToChatBox.bind(this);
  }

  componentDidMount() {    
    this.interval = setInterval(this.addRandomPersonEventToChatBox,1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  addWriteEventToChatBox(textMesParam)
  {
    if(textMesParam){
      let newArray = this.state.eventArray;
      newArray.unshift([<Event poza="data/alexandru.png" name="Alexandru Pavel" messageText={textMesParam} />]);
      this.setState(({
        eventArray:newArray
      }));
  }
}

  addRandomPersonEventToChatBox()
  {   
    let newArray = this.state.eventArray
    newArray.unshift(getRandomEvent());
    this.setState(({
      eventArray:newArray
    }));    
  }

  render() {  
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.rightChatBorder}>
          {this.state.eventArray}    
       </div>
      
       <div className={classes.rightWriteBorder}>
         <WriteBox addWriteEventToChatBox={this.addWriteEventToChatBox}/>
        </div>
    </div>
    );
  }
}

export default withStyles(eventChatBoxStyles)(EventChatBox);