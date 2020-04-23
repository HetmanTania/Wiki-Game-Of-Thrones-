import React from "react";
import "./character-page.css"
import ItemDetails from "../item-details/item-details";
import Error from "../Error/error";
import Loader from "../loader/loader";
import ItemList from "../item-list/item-list";
import TryError from "../try-error/try-error";

import DataItem from "../item-details/data-item";
import CharacterDetails from "../item-details/character-details";


export default class CharacterPage extends React.Component {


    state = {
        isErrorComponent: false
    };

    printLoaderOrItemList() {
        let loaderOrItemList;
        if (this.props.pageState.isLoad) {
            loaderOrItemList = <Loader/>
        }
        else if (this.props.pageState.isError){
            loaderOrItemList = <Error/>
        }
        else {
            loaderOrItemList = <div className="col-md-6">
                <ItemList listItem={this.props.itemList} onItemSelected={this.props.onItemSelected}/>
            </div>
        }
        return loaderOrItemList;
    }

    render() {
        return (
            <React.Fragment>
                <TryError>
                    {this.printLoaderOrItemList()}
                    {(this.props.characterSelected !== undefined) ? <CharacterDetails characterSelected={this.props.characterSelected}/> : undefined}
                </TryError>
            </React.Fragment>
        );
    }
}