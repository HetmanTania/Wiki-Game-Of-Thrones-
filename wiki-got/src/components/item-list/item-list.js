import React from "react";

import "./item-list.css"
import "../loader/loader"
import ApiGOTService from "../../services/serviseApiGOT";

export default class ItemList extends React.Component {



    render() {

        let listCharacters = undefined;
        if(this.props.listItem !== undefined) {
            listCharacters = this.props.listItem.map((el) => {
                return (<tr className="table-primary">
                    <th onClick={() => this.props.onItemSelected(el.id)}>{el.name}</th>
                    {/*<th onClick={() => this.props.onItemSelected(el.id)}>{el.name}</th>*/}
                </tr>)
            });
        }

        return (
            <div>
                <table className="table table-hover">
                    <tbody>
                        {listCharacters}
                    </tbody>
                </table>
            </div>
        );
    }
}