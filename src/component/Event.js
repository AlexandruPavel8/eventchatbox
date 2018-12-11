import React, { Component } from 'react';

import {eventStyles} from './style/EventStyle';
import { withStyles } from '@material-ui/core/styles';

import { companyDomain } from "../data/exampleData";

import Avatar from '@material-ui/core/Avatar';

class Event extends Component {
  render() {

    const { classes } = this.props;
      
    function addLabelToEvent(obiect, name, status, messageText)
    {
      if (obiect)
      {
        return <label><b>{name}</b> <b>{status}</b> <b>{obiect}</b> </label>
      }
      else
      {
        return <label><b>{name}</b> : {messageText} </label>
      }
    }

    const internetAdress = this.props.name.replace(/ /g,".");

    return (
      <div >
        <div className={classes.eventStyle}> 
          <div className={classes.left}>
               <Avatar alt="person" src={this.props.poza} className={classes.avatar}/>     
                {addLabelToEvent(this.props.obiect, this.props.name, this.props.status, this.props.messageText)}
          </div>
          <div className={classes.right}>
              <Avatar className={classes.imgLike} src="pics/like.png" alt="like"></Avatar>
              <a href={"sip:" + internetAdress + companyDomain}> <Avatar className={classes.imgLike} src="pics/skype.png" alt="skype"></Avatar></a>
              <a href={"mailto:" + internetAdress + companyDomain}><Avatar className={classes.imgLike} src="pics/outlook.png" alt="outlook"></Avatar></a>
          </div>
      </div>
        
       
      </div>
    );
  }
}

export default withStyles(eventStyles)(Event);
