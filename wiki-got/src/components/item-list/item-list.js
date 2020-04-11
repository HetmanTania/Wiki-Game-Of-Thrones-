import React from "react";

import "./item-list.css"
import "../loader/loader"
import ApiGOTService from "../../services/serviseApiGOT";

export default class ItemList extends React.Component {

    constructor() {
        super();

    }

    render() {
        let listCharacters = undefined;
        if(this.props.characters !== undefined) {
            listCharacters = this.props.characters.map((el) => {
                return (<tr className="table-primary">
                    <th>{el.name}</th>
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