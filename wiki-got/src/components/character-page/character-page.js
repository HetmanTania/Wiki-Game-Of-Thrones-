import React from "react";
import "./character-page.css"
import PersonDetails from "../person-details/person-details";
import Error from "../Error/error";
import Loader from "../loader/loader";
import ItemList from "../item-list/item-list";

export default class CharacterPage extends React.Component{


    state={
        isErrorComponent: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState({isErrorComponent: true })
    }

    render() {
        let loaderOrItemList;
        if (this.props.pageState.isError || this.setState.isErrorComponent) {
            loaderOrItemList = <Error/>
        }
        else if (this.props.pageState.isLoad) {
            loaderOrItemList = <Loader/>
        }
        else {
            loaderOrItemList = <div className="col-md-6">
                <ItemList listItem={this.props.itemList} onItemSelected={this.props.onItemSelected}/>
                {/*<ItemList listItem={this.props.itemList} onItemSelected={this.props.onItemSelected}/>*/}
            </div>
        }

        let characterDetails = undefined;
        if (this.props.characterSelected !== undefined) {
            characterDetails = <div className="col-md-6">
                <PersonDetails characterSelected={this.props.characterSelected}/>
                {/*<PersonDetails characterSelected={this.props.characterSelected}/>*/}
            </div>
        }

        return (
            <React.Fragment>
                {loaderOrItemList}
                {characterDetails}
            </React.Fragment>
        );
    }
}