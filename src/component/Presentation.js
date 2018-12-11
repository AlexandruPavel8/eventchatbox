import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import {presentationStyles} from './style/PresentationStyle';

class Presentation extends Component {
  render() {
    
    const { classes } = this.props;

    return (
        <div>
            <div className={classes.topDiv}>    
            </div>
            <div className={classes.bottomDiv}>
            </div>
      </div>
    );
  }
}

export default withStyles(presentationStyles)(Presentation);