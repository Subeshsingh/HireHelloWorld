import React, { Component } from 'react'
import './ApplyForm.css';
import Input from '../../components/UI/input/Input';
export class ApplyForm extends Component {
    state={
            formFields:{
                name:{
                    elementType: 'inputA',
                    label:'Name :',
                    elementConfig:{
                        type:'text',
                        placeholder:'Your Name'
                    },
                    value:'',
                    validation:{
                        required: true,
                    },
                    valid:false,
                    touched:false
                },
                email:{
                    elementType: 'inputA',
                    label:'Email :',
                    elementConfig:{
                        type:'email',
                        placeholder:'Your email'
                    },
                    value:'',
                    validation:{
                        required: true,
                        isEmail: true,
                    },
                    valid:false,
                    touched:false
                },
                resume:{
                    elementType: 'file',
                    label:'Upload Resume :',
                    elementConfig:{
                        type:'text',
                        placeholder:'Choose File'
                    },
                    file:null,
                    validation:{
                        required: true,
                    },
                    valid:false,
                    touched:false
                },
                message:{
                    elementType: 'textarea',
                    label:'Message :',
                    elementConfig:{
                        type:'text',
                        rows:'5',
                        placeholder:'Message'
                    },
                    value:'',
                    validation:{
                        required: true,
                    },
                    valid:false,
                    touched:false
                 }
                
        },
        isValid: false
    }
        //Methods for validating the each input and entire form
        checkValidity = (value,rules) => {
            let isValid= true;
            if(!rules){
                return true;
            }
    
            if(rules.required){
                isValid= value.trim() !=='' && isValid;
            }
    
            if ( rules.minLength ) {
                isValid = (value.length >= rules.minLength) && isValid
            }
    
            if ( rules.maxLength ) {
                isValid = (value.length <= rules.maxLength) && isValid
            }
    
            if(rules.isEmail){
                const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
                isValid = pattern.test( value ) && isValid;
            }
            if(rules.confirmpassword){
                isValid = ( value === this.state.auth.password.value) && isValid;
            }
    
            return isValid;
        };
// Checking validity for files input
    checkFileValidity= (value,rules)=>{
        let isValid=true;
        console.log(value.name+ "Files name");
        if(rules.required){
            isValid=(value.name.trim()!==null && isValid)
        }
        return isValid;
    }
 //Input taker fucntion------------------------   
    inputChangeHandler = (event,eleName) => {
        let updatedForm;
        if(eleName==='resume'){
            updatedForm={
                ...this.state.formFields,
                [eleName]:{
                    ...this.state.formFields[eleName],
                    elementConfig:{
                        ...this.state.formFields[eleName].elementConfig,
                        placeholder:event.target.files[0].name,
                    },
                    file: event.target.files[0],
                    valid: this.checkFileValidity(event.target.files[0], this.state.formFields[eleName].validation),
                    touched: true,
                }
            }
        }else{
            updatedForm={
                ...this.state.formFields,
                [eleName]:{
                    ...this.state.formFields[eleName],
                    value: event.target.value,
                    valid: this.checkValidity(event.target.value, this.state.formFields[eleName].validation),
                    touched: true,
                }
            }
         }
         
        this.setState({formFields: updatedForm});
    }
// form Submit--------------------------------------------------------------
    submitHandler = (event) =>{
        event.preventDefault();
        console.log("Submit");
        // this.props.onSignup( this.state.auth.email.value, this.state.auth.password.value , this.state.auth.cnfpassword.value);
    }
    render() {
        const formElementArray=[];
        for(let ele in this.state.formFields){
            formElementArray.push({
                id:ele,
                config: this.state.formFields[ele]
            });
        }
        
        let form= formElementArray.map( formElem =>(
            <Input 
                key={formElem.id}
                for={formElem.id}
                elementType={formElem.config.elementType}
                label={formElem.config.label}
                elementConfig ={formElem.config.elementConfig}
                invalid={!formElem.config.valid}
                shouldValidate={formElem.config.validation}
                value={formElem.config.value} 
                changed={(event)=> this.inputChangeHandler(event, formElem.id)}/>
        ));
        return (
            <div className="applyformwrapper">
                <h4>HireHelloWorld Apllication Form</h4>
                <div className="container">
                     {form}
                     <div className="subButton">
                     <input type="submit" value="Submit" class="btn btn-dark mt-1 py-2"/>
                     </div>
                     
                </div>
            </div>
        )
    }
}

export default ApplyForm;
