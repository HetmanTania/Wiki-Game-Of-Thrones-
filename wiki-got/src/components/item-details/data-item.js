import React from "react";

export default class DataItem extends React.Component{
    render() {
        return (
            <div className="card-body">
                {this.props.children}
            </div>
        );
    }
}
