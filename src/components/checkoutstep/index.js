import React from 'react';
import "./index.css";

export default function CheckOut(props) {
    return (
        <div className="row checkout-steps">
            <div className={props.step1 ? 'active' : ''}>Login</div>
            <div className={props.step2 ? 'active' : ''}>Pay</div>
            <div className={props.step3 ? 'active' : ''}>Waiting</div>
            <div className={props.step4 ? 'active' : ''}>Success</div>
        </div>
    )
}