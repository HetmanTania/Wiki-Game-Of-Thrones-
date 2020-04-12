import React from "react";
import "./error.css"
import errorImg  from "./error.png"
export default class Error extends React.Component{
    render() {
        return (
            <div id="error-div">
                <div className="error-img-div">
                 <img src={errorImg} alt="Error"/>
                </div>
                <h3 id="error-header">Opss... Error.</h3>
            </div>
        );
    }
}