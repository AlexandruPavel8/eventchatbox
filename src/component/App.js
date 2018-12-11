import React, { Component } from 'react';
import EventChatBox from '../component/EventChatBox';
import Presentation from '../component/Presentation';

import { withStyles } from '@material-ui/core/styles';
import {appStyles} from './style/AppStyle';


class App extends Component {
  render() {

    const { classes } = this.props;

    return (

      <div>
        <div className={classes.split + " " + classes.left}><Presentation /></div>
        <div className={classes.split + " " + classes.right}><EventChatBox /></div>
      </div>
    );
  }
}

export default withStyles(appStyles)(App);
