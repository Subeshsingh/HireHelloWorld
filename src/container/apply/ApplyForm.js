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
                    touched:false,
                    error:null
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
                    touched:false,
                    error:null
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
                    touched:false,
                    error:null
                },
                message:{
                    elementType: 'textarea',
                    label:'Message :',
                    elementConfig:{
                        type:'text',
                        rows:'3',
                        placeholder:'Message'
                    },
                    value:'',
                    validation:{
                        required: true,
                    },
                    valid:false,
                    touched:false,
                    error:null
                 }
                
        },
        errors:{
            name:'Please enter the Name',
            email:'Please enter a valid Email',
            resume:'Please select a valid file',
            message:'Please write your Message'
        },
        success:null,
        isValid: true,
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
        const updatedForm={
            ...this.state.formFields
        };
        const updatedFormElem={
            ...updatedForm[eleName]
        }
        if(eleName==='resume'){  
            updatedFormElem.elementConfig={
                        ...updatedFormElem.elementConfig,
                          placeholder:event.target.files[0].name,
                     };
            updatedFormElem.file=event.target.files[0];
            console.log(updatedFormElem.files);
            updatedFormElem.valid=this.checkFileValidity(event.target.files[0], updatedForm[eleName].validation);            
        }else{    
            updatedFormElem.value=event.target.value;
            updatedFormElem.valid=this.checkValidity(event.target.value,updatedForm[eleName].validation);
         }
        updatedFormElem.touched= true;
        if(updatedFormElem.valid){
            updatedFormElem.error=null;
        }else{
            updatedFormElem.error= this.state.errors[eleName];
        }
        updatedForm[eleName]=updatedFormElem;
        let formIsValid=true;
         for(let ele in updatedForm){
            formIsValid=updatedForm[ele].valid && formIsValid;
         }
         this.setState({formFields: updatedForm,isValid: formIsValid});
    }

// form Submit--------------------------------------------------------------
    submitHandler = (event) =>{
        event.preventDefault();
        let formisValid=true;
        for(let formElem in this.state.formFields ){
            formisValid= (this.state.formFields[formElem].valid && formisValid)
        }
        if(formisValid){ 
            console.log("Submit");
             // this.props.onSignup( this.state.auth.email.value, this.state.auth.password.value , this.state.auth.cnfpassword.value);    
            this.setState((prevState,props)=>({
                ...prevState,
                formFields:{
                    ...prevState.formFields,
                    name:{
                        ...prevState.formFields.name,
                        value:"",
                        touched:false,
                        error:null
                    },
                    email:{
                        ...prevState.formFields.email,
                        value:"",
                        touched:false,
                        error:null
                    },
                    resume:{
                        ...prevState.formFields.resume,
                        elementConfig:{
                            ...prevState.formFields.resume.elementConfig,
                            placeholder:'Message'
                        },
                        file:null,
                        value:"",
                        touched:false,
                        error:null
                    }, 
                    message:{
                        ...prevState.formFields.message,
                        value:"",
                        touched:false,
                        error:null
                    },
                },
                success:'Form submitted Successfully.',
                isValid:true
            }));
        }else{
            this.setState((prevState,props)=>({
                ...prevState,
                isValid:false,
                success:'Please fill the form',
            }));
         }
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
                changed={(event)=> this.inputChangeHandler(event, formElem.id)}
                error={formElem.config.error}/>
        ));
        return (
            <div className="applyformwrapper">
                <div className="container">
                     { this.state.success==='Please fill the form'?
                        <div className="successMessageDanger">{this.state.success}</div>:
                        <div className="successMessage">{this.state.success}</div> }
                     {form}
                     <div className="submitButton">
                     <button type="submit"disabled={!this.state.isValid} className="btn btn-success btn-sm ml-auto mr-2" onClick={this.submitHandler}>Submit</button>
                     <div className="verticalDevider"></div>
                     <button type="button" className="btn btn-danger btn-sm mr-auto ml-2" onClick={this.props.handleApplyForm}>Close</button>
                     </div>
                     
                </div>
            </div>
        )
    }
}

export default ApplyForm;
