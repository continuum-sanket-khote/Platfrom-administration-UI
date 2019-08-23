import React from 'react';
import { createStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import Button from '@material-ui/core/Button';
import NavBar from  './NavBar'
import Center from 'react-center';
const styles = createStyles(() => ({
  container: {
    
    flexWrap: 'wrap',
  },
  textField: {

    width: 700,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  root: {
    padding: '100px',
    marginTop: 50,  
   
  },
  button: {
    marginLeft: 10,  
    marginTop: 20,  
   
  },
  formControl: {},
}));

class TextFields extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      endpoints: '',
      files:'',
      request_name:'',
    }
    this.routeChange_link = this.routeChange_link.bind(this);
  }
  

  routeChange_link() {
    let path = `table_request`;
    this.props.history.push(path);
  }
  changeHandler= e =>{
    this.setState({[e.target.name]: [e.target.value]})
}
  handleChange = name => event => {
    this.setState({ ...this.state, [name]: [event.target.value] });
  };
  submitHandler=e=>{
      e.preventDefault()
     
      axios.post('http://172.28.51.145:12201/v1/upload-plugin/reterive-logs',this.state)
      .then(response =>{
        console.log(response)
        alert("data sent successfully")
        this.routeChange_link()
      })
      .catch(error=>{
        alert("something went wrong !!!")
      })
  }

  render() { 
 
  const { classes } = this.props

 
  console.log(this.state)
  
  return (
    <div>
    <NavBar/>
    <Center>
    <div>
     <Paper className={classes.root}  >
        <form className={classes.container} Validate autoComplete="on" >
          <label>Enter Details</label>
          <br></br>
          <TextField
             id="standard-multiline-flexible"
             label="Request Name"
             
             rows="1"
             value={this.state.request_name}
              onChange={this.handleChange('request_name')}
              className={classes.textField}
              margin="normal"
              required
            />
            <br></br>
            <TextField
             id="standard-multiline-flexible"
             label="Endpoints"
             multiline
             rows="4"
             value={this.state.endpoints}
              onChange={this.handleChange('endpoints')}
              className={classes.textField}
              margin="normal"
              required
            />
            <br></br>
            <TextField
             id="standard-multiline-flexible"
             label="Files"
             multiline
             rows="4"
             value={this.state.files}
              onChange={this.handleChange('files')}
              className={classes.textField}
              margin="normal"
              required
            />
             
        </form>
        <Button variant="contained" color="primary" className={classes.button} type="submit" onClick={this.submitHandler} >
            Submit
          </Button>
          <br>
          </br>
         
      </Paper>
      
    </div>
    </Center>
    </div>
  );
}
}


export default withStyles(styles) (TextFields)
