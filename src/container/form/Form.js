import React, { Component } from 'react';
import './Form.css';
import Input from '../../components/UI/input/Input';

export class Form extends Component {
    state={
        auth:{
            name:{
                elementType: 'input',
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
                elementType: 'input',
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
            subject:{
                elementType: 'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Subject'
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
        message:{
            elementType: 'textarea',
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
            touched:false,
            error:null
        }, 
        errors:{
            name:'Please enter the "Name"',
            email:'Please enter a valid "Email"',
            subject:'Please fill the "Subject"',
            message:'Please write your "Message"'
        },
        isValid:true
    };

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

    //------------Input data handler---------- 
    
    inputChangeHandler = (event,eleName) => {
       let updatedState={
           ...this.state,
       }
        if(eleName==='message'){     
            let updatedMessage={
                ...updatedState[eleName]
            };
            updatedMessage.value=event.target.value;
            updatedMessage.valid=this.checkValidity(event.target.value, updatedState[eleName].validation);
            updatedMessage.touched=true
            if(updatedMessage.valid){
                updatedMessage.error=null
            }else{
                updatedMessage.error=updatedState.errors[eleName];
            }
            // console.log(updatedMessage);
            //Checking for form validity------------------------------
            let formIsValid=true;
            for (let inputIdentifier in updatedState.auth) {
                formIsValid = updatedState.auth[inputIdentifier].valid && formIsValid;
            }
            formIsValid=updatedMessage.valid && formIsValid;
            
            this.setState({message: updatedMessage,isValid:formIsValid});
        }else{
            
            let updatedAuth={
                ...this.state.auth,
            };
            let updatedAuthElem={
                ...updatedAuth[eleName]
            }  
            updatedAuthElem.value=event.target.value;
            updatedAuthElem.valid=this.checkValidity(event.target.value,updatedAuth[eleName].validation);
            updatedAuthElem.touched=true;
            if(updatedAuthElem.valid){
                updatedAuthElem.error=null;
            }else{
                updatedAuthElem.error=updatedState.errors[eleName];
            }
            updatedAuth[eleName]=updatedAuthElem;
            // console.log(updatedAuth);
            
            //Checking for form validity------------------------------
            let isValid=true;
            for (let inputIdentifier in updatedAuth) {
                isValid = updatedAuth[inputIdentifier].valid && isValid;
            }
            isValid=updatedState.message.valid && isValid;
            this.setState({auth: updatedAuth, isValid:isValid});
        }
    }
    formValidator= () => {

    }
    submitHandler = (event) =>{
        event.preventDefault();
        let formisValid=true;
        for(let formElem in this.state.auth ){
            formisValid= (this.state.auth[formElem].valid && formisValid)
        }
        formisValid=this.state.message.valid && formisValid;
        if(formisValid){ 
            console.log("Submit");
             // this.props.onSignup( this.state.auth.email.value, this.state.auth.password.value , this.state.auth.cnfpassword.value);    
         }else{
             this.setState((prevState,props)=>({
                 ...prevState,
                 isValid:false
             }));
             alert("Please fill the form");
         }
    }

    
    render() {
        const formElementArray=[];
        for(let ele in this.state.auth){
            formElementArray.push({
                id:ele,
                config: this.state.auth[ele]
            });
        }
        
        let form= formElementArray.map( formElem =>(
            <Input 
                key={formElem.id}
                elementType={formElem.config.elementType}
                elementConfig ={formElem.config.elementConfig}
                invalid={!formElem.config.valid}
                shouldValidate={formElem.config.validation}
                value={formElem.config.value} 
                changed={(event)=> this.inputChangeHandler(event, formElem.id)}
                error={formElem.config.error}/>
        ));

        return (
           <section id="contact" className="contactForm">  
                <div className="container">
                    <h4>Get in Touch</h4>
                    {/* <p>
                        Reque facer nostro et ius, cu persius mnesarchum disputando eam, clita prompta et mel vidisse phaedrum pri et. Facilisis posidonium ex his. Mutat iudico vis in, mea aeque tamquam scripserit an, mea eu ignota viderer probatus. Lorem legere consetetur ei
                        eum. Sumo aeque assentior te eam, pri nominati posidonium consttuam
                    </p> */}
                    <div className="blankdivider30"></div>
                    <form onSubmit={this.submitHandler}>
                        <div className="row">
                            <div className="col-sm-6">        
                                {form}
                            </div>
                            <div className="col-sm-6 divButton">
                            <textarea rows="5" className="form-control" placeholder="Message" onChange={e =>this.inputChangeHandler(e,"message")} 
                                        value={this.state.message.value}></textarea>
                                <div className="error">{this.state.message.error}</div>
                                <input type="submit" value="Send Message" disabled={!this.state.isValid} className="btn btn-dark mt-3 py-2"/>
                            </div>
                         
                        </div>
                    </form>
               </div>
            </section>
        )
    }
}

export default Form
