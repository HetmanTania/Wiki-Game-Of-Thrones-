import React from "react";

import "./item-list.css"
import "../loader/loader"


export default class ItemList extends React.Component {
    render() {

        let listItems = undefined;
        if(this.props.listItem !== undefined) {
            listItems = this.props.listItem.map((el) => {
                return (<tr className="table-primary">
                    <th onClick={() => this.props.onItemSelected(el.id)}>{el.name}</th>
                </tr>)
            });
        }

        return (
            <div>
                <table className="table table-hover">
                    <tbody>
                        {listItems}
                    </tbody>
                </table>
            </div>
        );
    }
}