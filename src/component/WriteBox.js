import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import {writeBoxStyles} from './style/WriteBoxStyle';

import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';

class WriteBox extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      textMessage: '',
      name: "Alexandru Pavel",
      poza: "data/alexandru.png"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  
  handleChange(event) {
    this.setState({textMessage: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addWriteEventToChatBox(this.state.textMessage);
    this.setState({textMessage: ""});
  }

  render() {
    
    const { classes } = this.props;

    return (
      <div>
        <form className={classes.container} onSubmit={this.handleSubmit}>
          <Avatar alt="person" src={this.state.poza} className={classes.avatar} />
          <TextField
          id="standard-helperText"
          label="Write to the Community"
          InputLabelProps={{className: classes.input}}
          className={classes.textField}
          value={this.state.textMessage}
          onChange={this.handleChange}
          helperText="Enter your text here"
          FormHelperTextProps={{className: classes.input}}        
          margin="normal"
          InputProps={{className: classes.input}}
         
        />
        </form>
      </div>
    );
  }
}

export default withStyles(writeBoxStyles)(WriteBox);