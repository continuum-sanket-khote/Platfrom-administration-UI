import React from "react"
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import NavBar from  './NavBar'
import Center from 'react-center';
import Button from '@material-ui/core/Button';

const StyledTableCell = withStyles(theme => ({
   head: {
     backgroundColor: theme.palette.common.black,
     color: theme.palette.common.white,
     marginLeft: theme.spacing(30),
     
   },
   body: {
     fontSize: 14,
    
   },
 }))(TableCell);
 
 const StyledTableRow = withStyles(theme => ({
   root: {
     '&:nth-of-type(odd)': {
       backgroundColor: theme.palette.background.default,
       width:'80%',
       paddingLeft: theme.spacing(30),
     },
   },
 }))(TableRow);

var style = {
  display: 'flex',
  marginTop: "30px"
};
var buttonStyle={
  height:"50px",
  width:  "100px",
  marginLeft: "20px"
};
export default class App extends React.Component {

   constructor(props) {
    super(props)

    this.state = { //state is by default an object
      data: [],
      request_id:this.props.match.params.name 
    }
   }
 


   componentDidMount() {
      this.renderTableData()
   }
  
  renderTableData = () => {
   axios.get('http://172.28.51.145:12201/v1/upload-plugin/reterive-response?req_id='+this.state.request_id)
        
   .then(response =>{
       if (response.data) {

        if (response.data.data.RepositoriesResponseSummary !== null) {
          console.log(response.data)
          this.setState({
            data:response.data.data.RepositoriesResponseSummary         
          })
        }  
      }
   })
   .catch(error=>{
       console.log(error)
   })
 }
 
  render() {
        //console.log(JSON.stringify(this.props.match))
       
       
     console.log(this.state.request_id)
    return (
      <div>
        <NavBar/>
        
        <Center>
       <div style={style}>
        <div  >
      <Paper >
      
     
     
     

         {/* {this.state.data.map(row => (
               <tr>
                  <td>{row.request_id}</td>
                  <td>{row.endpoint_no}</td>
                  <td>{row.requested_on}</td>
               </tr>
         ))} */}
        
         <Table>
        <TableHead>
          <StyledTableRow>
          
            <StyledTableCell align="center">Endpoint ID</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Created On</StyledTableCell>
            <StyledTableCell align="center">Updated On</StyledTableCell>
           
          </StyledTableRow>
        </TableHead>
          <TableBody>
            {this.state.data.map(row => (
               
               <StyledTableRow key={row.request_id}>
                 
                  <TableCell component="th" scope="row" align="right">{row.endpoint_id}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                  <TableCell align="right">{row.created_on}</TableCell>
                  <TableCell align="right">{row.updated_on}</TableCell>
               </StyledTableRow >
            ))}
         </TableBody>
       
      
         </Table>
         
       
      </Paper>
     
    
      </div>
      <Button variant="contained" color="primary" type="submit" style={buttonStyle} onClick={()=> window.location.reload()} >
                        Refresh
                    </Button>
      </div>
     
      </Center>
      </div>
    );
  }

}