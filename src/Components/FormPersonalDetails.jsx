import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

class FormPersonalDetails extends Component {
    
    continue = (e) =>{
        e.preventDefault();
        this.props.nextStep();
    }    

    back = (e) =>{
        e.preventDefault();
        this.props.preStep();
    }  

    render() { 
        const {values, handleChange} = this.props;
        return ( 
        <MuiThemeProvider>
            <React.Fragment>
            <AppBar title="Enter Personal Details"></AppBar>
                <TextField 
                hintText="Enter Your Ocuupation Name"
                floatingLabelText="Occupation"
                onChange = {handleChange('occupation')}
                defaultValue = {values.occupation}
                ></TextField> <br/>

                <TextField 
                hintText="Enter Your City"
                floatingLabelText="City"
                onChange = {handleChange('city')}
                defaultValue = {values.city}
                ></TextField> <br/>

                <TextField 
                hintText="Enter Your Bio"
                floatingLabelText="Bio"
                onChange = {handleChange('bio')}
                defaultValue = {values.bio}
                ></TextField> <br/>

                <RaisedButton
                label="Continue"
                primary={true}
                style = {styles.button}
                onClick = {this.continue}
                >
                </RaisedButton>

                <RaisedButton
                label="Back"
                primary={false}
                style = {styles.button}
                onClick = {this.back}
                >
                </RaisedButton>

            </React.Fragment>
        </MuiThemeProvider>
            );
    }
}
const styles = {
    button :{
        margin : 15
    }
} 

export default FormPersonalDetails;