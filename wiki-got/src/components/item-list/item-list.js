import React from "react";

import "./item-list.css"
export  default class ItemList extends React.Component {
    render() {
        return (
            <div>
                <table className="table table-hover">
                    <tbody>
                        <tr className="table-primary"><th >Jon Snow</th></tr>
                        <tr className="table-primary"><th >Jon Snow</th></tr>
                        <tr className="table-primary"><th >Jon Snow</th></tr>
                        <tr className="table-primary"><th >Jon Snow</th></tr>
                    </tbody>
                </table>
            </div>
        );
    }
}