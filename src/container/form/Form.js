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
                touched:false
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
                touched:false
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
                touched:false
            },
            // message:{
            //     elementType: 'textarea',
            //     elementConfig:{
            //         type:'text',
            //         rows:'5',
            //         placeholder:'Message'
            //     },
            //     value:'',
            //     validation:{
            //         required: true,
            //     },
            //     valid:false,
            //     touched:false
            // }
        },
        isValid:false,
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
        const updatedAuth={
            ...this.state.auth,
            [eleName]:{
                ...this.state.auth[eleName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.auth[eleName].validation),
                touched: true,
            }
        }
        this.setState({auth: updatedAuth});
    }

    submitHandler = (event) =>{
        event.preventDefault();
        console.log("Submit");
        // this.props.onSignup( this.state.auth.email.value, this.state.auth.password.value , this.state.auth.cnfpassword.value);
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
                changed={(event)=> this.inputChangeHandler(event, formElem.id)}/>
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
                            <textarea rows="5" className="form-control" required placeholder="Message"></textarea>
                                <input type="submit" value="Send Message" class="btn btn-dark mt-3 py-2"/>
                            </div>
                         
                        </div>
                    </form>
               </div>
            </section>
        )
    }
}

export default Form
