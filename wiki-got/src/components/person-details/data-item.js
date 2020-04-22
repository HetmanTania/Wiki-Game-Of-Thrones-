import React from "react";

export default class DataItem extends React.Component{
    render() {
        return (
            <div className="card-body">
                {this.props.children}
            </div>

            /*
            <div className="data-born">
                <p>{this.props.lable} </p>
                <p className="card-text born-person">{this.props.field}</p>
            </div>*/
        );
    }
}
