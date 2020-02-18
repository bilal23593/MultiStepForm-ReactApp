import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import {List,ListItem} from 'material-ui/List'

class Confirm extends Component {
    
    continue = (e) =>{
        e.preventDefault();
        //Process data here using API
        this.props.nextStep();
    }    

    back = (e) =>{
        e.preventDefault();
        this.props.preStep();
    }  

    render() { 
        const {values : {firstName,lastName,email,occupation,city,bio}} = this.props;
        return ( 
        <MuiThemeProvider>
            <React.Fragment>
            <AppBar title="Confirm User Data"></AppBar>
               
                <List>
                    <ListItem
                        primaryText="First Name"
                        secondaryText={firstName}
                    />
                    <ListItem
                        primaryText="Last Name"
                        secondaryText={lastName}
                    />
                    <ListItem
                        primaryText="Email"
                        secondaryText={email}
                    />
                    <ListItem
                        primaryText="Occupation"
                        secondaryText={occupation}
                    />
                    <ListItem
                        primaryText="City"
                        secondaryText={city}
                    />
                    <ListItem
                        primaryText="Bio"
                        secondaryText={bio}
                    />
                    <ListItem
                        primaryText="First Name"
                        secondaryText={firstName}
                    />




                </List>

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

export default Confirm;