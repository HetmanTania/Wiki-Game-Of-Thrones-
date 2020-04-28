import React from "react";
import "./character-page.css"

import Error from "../Error/error";
import Loader from "../loader/loader";
import ItemList from "../item-list/item-list";
import TryError from "../try-error/try-error";

import CharacterDetails from "../item-details/character-details";
import Pagination from "../pagination/pagination";

import paginationHelper from "../pagination/pagination-helper"

export default class CharacterPage extends React.Component {


    state = {
        isErrorComponent: false,
        printCharacters: []
    };

    PaginationHelper = new paginationHelper();


    getPrintCharacters (page) {
        return  this.PaginationHelper.getPrintItems(this.props.itemList, 10, page);
    }
    setPrintCharacters = (page) =>{
        this.setState({printCharacters:  this.PaginationHelper.getPrintItems(this.props.itemList, 10, page)})
    }

    onClickPagination = (page) => {
        if( this.props.itemList !== undefined) {
            this.setPrintCharacters(page);
        }
    }

    printLoaderOrItemList() {

        let loaderOrItemList;
        if (this.props.pageState.isLoad) {
            loaderOrItemList = <Loader/>
        }
        else if (this.props.pageState.isError){
            loaderOrItemList = <Error/>
        }
        else {
            let cherecters;
            if(this.state.printCharacters.length === 0 ){
                cherecters = this.getPrintCharacters(1);
            }
            else {
                cherecters = this.state.printCharacters;
            }
            loaderOrItemList = <div className="col-md-6">
                <ItemList listItem={cherecters} onItemSelected={this.props.onItemSelected}/>
                <Pagination totalPage={this.props.itemList.length} pageCount="10" onClickPagination={this.onClickPagination} />
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