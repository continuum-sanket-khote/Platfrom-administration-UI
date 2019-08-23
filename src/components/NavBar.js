import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
const NavBar =()=>{
    return(
        <div>
            <AppBar position="static">
                <ToolBar>
                    <Typography variant="title" color="inherit" align="center">
                       
                        <Link to="/" style={{ color: '#FFF' }}>Home</Link>
                        <Link to="/table_request" style={{ color: '#FFF',marginLeft:"20px"}}>Requests</Link>
                    </Typography>
                </ToolBar>
            </AppBar>
        </div>
    )
}
export default NavBar;