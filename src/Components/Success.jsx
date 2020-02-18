import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'


class Success extends Component {

    render() { 
        return (
            <MuiThemeProvider>
            <React.Fragment>
            <AppBar title="Success"></AppBar>
               <h1>Thank you for your submission</h1>

            </React.Fragment>
        </MuiThemeProvider>
        );
    }
}
 
export default Success;
