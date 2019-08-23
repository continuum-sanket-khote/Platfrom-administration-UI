import React from "react"
import axios from 'axios'
import { withStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import NavBar from  './NavBar'
import Center from 'react-center';
const StyledTableCell = withStyles(theme => ({
   head: {
     backgroundColor: theme.palette.common.black,
     color: theme.palette.common.white,
   },
   body: {
     fontSize: 14,
   },
 }))(TableCell);
 
export default class App extends React.Component {

   constructor(props) {
    super(props)

    this.state = { //state is by default an object
      data: []
    }
    this.routeChange_link = this.routeChange_link.bind(this);
   }
 

   routeChange_link() {
    let path = `table_response`;
    this.props.history.push(path);
  }

   componentDidMount() {
      this.renderTableData()
   }
  
  renderTableData = () => {
   axios.get('http://172.28.51.145:12201/v1/upload-plugin/reterive-requests')
        
   .then(response =>{
       if (response.data) { 
         this.setState({
           data:response.data.data.RepositoriesRequestSummary
          
         })  
       }
   })
   .catch(error=>{
       console.log(error)
   })
 }
 
  render() {

     console.log(this.state.data)
    return (
      <div>
         <NavBar />
         <Center>
      <Paper >
      <div className="App">
     
     
    

         {/* {this.state.data.map(row => (
               <tr>
                  <td>{row.request_id}</td>
                  <td>{row.endpoint_no}</td>
                  <td>{row.requested_on}</td>
               </tr>
         ))} */}
<TableHead>
          <TableRow>
            <StyledTableCell align="center">Request ID</StyledTableCell>
            <StyledTableCell align="center">Request Name</StyledTableCell>
            <StyledTableCell align="center">Endpoint No</StyledTableCell>
            <StyledTableCell align="center">Files</StyledTableCell>
             <StyledTableCell align="center">Created On</StyledTableCell>
            <StyledTableCell align="center">Details</StyledTableCell>
           
          </TableRow>
        </TableHead>
          <TableBody>
            {this.state.data.map(row => (
               
               <TableRow key={row.request_id } class='clickable-row' data-href='url://link-for-first-row/'>
                  <TableCell component="th" scope="row">
                     {row.request_id}
                  </TableCell>
                  <TableCell align="right">{row.request_name}</TableCell>
                  <TableCell align="right">{row.endpoint_no}</TableCell>
                  <TableCell align="right">{row.files}</TableCell>
                  <TableCell align="right">{row.created_on}</TableCell>
                  <TableCell align="right">
                    <Button variant="contained" color="primary" type="submit" onClick={()=> this.props.history.push("table_response/"+row.request_id)} >
                        View
                    </Button>
                  </TableCell>
               </TableRow>
            ))}
         </TableBody>
       
      
       
      </div>
     
      </Paper>
      </Center>
      </div>
    );
  }

}