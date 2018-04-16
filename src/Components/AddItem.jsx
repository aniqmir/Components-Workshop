import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});


class TextFields extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off"> 
       <TextField
          id="name"
          label="Name"
          placeholder="Enter Name of Product"
          className={classes.textField}
          margin="normal"
        />
        <TextField
          id="type"
          label="Type"
          placeholder="Enter Type of Product"
          className={classes.textField}
          margin="normal"
        />
          
        <TextField
          id="price"
          label="Price"
          placeholder="Enter Price of Product"
          className={classes.textField}
          margin="normal"
        />

          <TextField
          id="id"
          label="ID"
          placeholder="Enter ID of Product"
          className={classes.textField}
          margin="normal"
        />
          
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
