import React from 'react';
import './Input.css';

const Input = (props) => {

    let inputElement=null;
    switch (props.elementType){
        
        case('input'):
            inputElement = (
                <input 
                id={props.for}
                className="form-control py-4"
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}/>
            );
        break;
        case('inputA'):
        inputElement = (
                <input 
                id={props.for}
                className="form-control form-control-md"
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}/>
            );
        break;
        case('textarea'):
        inputElement = (
            <textarea
            id={props.for}
            className="form-control form-control-md"
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}/>
        );
        break;
        case('file'):
        inputElement = (
                <div className="custom-file">
                    <input type="file" className="custom-file-input form-control-md" id={props.for} onChange={props.changed} 
                        value={props.value}/>
                    <label className="custom-file-label form-label-md" htmlFor={props.for} aria-describedby={props.for}>{props.elementConfig.placeholder}</label>
                </div>);
    break;
        default:
            inputElement = (
                <input className="form-control py-2"
                id={props.for}
                {...props.elementConfig}
                   value={props.value}
                   onChange={props.changed}/>
            );
    }
    return (
        <div className="form-group"> 
            <label className="label" htmlFor={props.for}>{props.label}</label><br/>
              {inputElement}
            <div className="error">{props.error}</div>     
        </div>
    )
}

export default Input;
