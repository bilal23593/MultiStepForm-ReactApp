import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Success  from './Success'

class UserForm extends Component {
    state = { 

        step:1,
        firstName:'',
        lastName:'',
        email   :'',
        occupation:'',
        city:'',
        bio:'',
     }

    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step : step + 1
        })
    }

    preStep = () =>{
        const {step} = this.state;
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => e =>{

        this.setState({[input]: e.target.value});
        
    }
    render() { 

        const {step} = this.state;
        const {firstName,lastName,email,occupation,city,bio} = this.state; 
        const values = {firstName,lastName,email,occupation,city,bio};
        
        switch (step) {
            case 1:
                return(
                    <FormUserDetails
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    values= {values}
                    />
                )
        
            case 2:
                return(
                    <FormPersonalDetails
                    nextStep = {this.nextStep}
                    preStep = {this.preStep}
                    handleChange = {this.handleChange}
                    values= {values}
                    />
                )
            case 3:
                return(
                    <Confirm
                    nextStep = {this.nextStep}
                    preStep = {this.preStep}
                    values= {values}
                    
                    />
                )

            case 4:
                return(
                    <Success/>

                )
        }
    }
}
 
export default UserForm;