import React from 'react';
import './Input.css';

const Input = (props) => {

    let inputElement=null;
    switch (props.elementType){
        
        case('input'):
            inputElement = (
                <input 
                className="form-control py-4"
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}/>
            );
        break;
        case('textarea'):
        inputElement = (
            <textarea
            className="form-control"
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}/>
        );
    break;
        default:
            inputElement = (
                <input className="form-control py-2"
                {...props.elementConfig}
                   value={props.value}
                   onChange={props.changed}/>
            );
    }
    return (
        <div className="form-group"> 
            {inputElement}     
        </div>
    )
}

export default Input;
