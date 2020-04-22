import React from "react";
import "./character-page.css"
import ItemDetails from "../person-details/item-details";
import Error from "../Error/error";
import Loader from "../loader/loader";
import ItemList from "../item-list/item-list";
import TryError from "../try-error/try-error";

import DataItem from "../person-details/data-item";


export default class CharacterPage extends React.Component {


    state = {
        isErrorComponent: false
    };

    render() {
        let loaderOrItemList;

        if (this.props.pageState.isLoad) {
            loaderOrItemList = <Loader/>
        } else {
            loaderOrItemList = <div className="col-md-6">
                <ItemList listItem={this.props.itemList} onItemSelected={this.props.onItemSelected}/>
            </div>
        }


        let characterDetails = undefined;
        if (this.props.characterSelected !== undefined) {

            let aliases = this.props.characterSelected.aliases.map(
                (el) => {
                    if (el !== "") {
                        return (<li className="list-group-item">{el}</li>)
                    }
                });

            let ulAliases;
            if (aliases[0] !== undefined) {
                ulAliases = <DataItem>
                    <ul className="list-group list-group-flush list-aliases-person">
                        {aliases}
                    </ul>
                </DataItem>
            }

            let born;
            if (this.props.characterSelected.born !== "") {
                born = <div className="data-born">
                    <p>Born: </p>
                    <p className="card-text born-person">{this.props.characterSelected.born}</p>
                </div>
            }

            let died;
            if (this.props.characterSelected.died !== "") {
                died = <div className="data-died">
                    <p>Died: </p>
                    <p className="card-text died-person">{this.props.characterSelected.died}</p>
                </div>
            }


            characterDetails = <div className="col-md-6">
                <ItemDetails itemSelected={this.props.characterSelected}>
                    <DataItem>
                        <h5 className="card-title">{this.props.characterSelected.gender}</h5>
                        <h6 className="card-subtitle text-muted">{this.props.characterSelected.culture}</h6>
                    </DataItem>
                    <DataItem>
                        <div className="img-person-details"></div>
                    </DataItem>
                    <DataItem>
                        {born}
                        {died}
                    </DataItem>
                    {ulAliases}
                </ItemDetails>
            </div>
        }

        return (
            <React.Fragment>
                <TryError>
                    {loaderOrItemList}
                    {characterDetails}
                </TryError>
            </React.Fragment>
        );
    }
}