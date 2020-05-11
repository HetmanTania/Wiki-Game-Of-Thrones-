import React from "react";
import paginationHelper from "../pagination/pagination-helper";
import Loader from "../loader/loader";
import Error from "../Error/error";
import ItemList from "../item-list/item-list";
import Pagination from "../pagination/pagination";
import TryError from "../try-error/try-error";
import CharacterDetails from "../item-details/character-details";
import ItemDetails from "../item-details/item-details";
export default class Page extends React.Component{

    state = {
        isErrorComponent: false,
        printData: []
    }
    PaginationHelper = new paginationHelper();

    getPrintData (page) {
        return  this.PaginationHelper.getPrintItems(this.props.itemList, 15, page);
    }
    setPrintData = (page) =>{
        this.setState({printData:  this.PaginationHelper.getPrintItems(this.props.itemList, 15, page)})
    }

    onClickPagination = (page) => {
        if( this.props.itemList !== undefined) {
            this.setPrintData(page);
        }
    }

    printLoaderOrItemList(){
        let loaderOrItemList;
        if (this.props.pageState.isLoad) {
            loaderOrItemList = <Loader/>
        }
        else if (this.props.pageState.isError){
            loaderOrItemList = <Error/>
        }
        else{
            let data;
            if(this.state.printData.length === 0 ){
                data = this.getPrintData(1);
            }
            else {
                data = this.state.printData;
            }
            loaderOrItemList = <div className="col-md-6">
                <ItemList listItem={data} onItemSelected={this.props.onItemSelected}/>
                <Pagination totalPage={this.props.itemList.length} pageCount="15" onClickPagination={this.onClickPagination} />
            </div>
        }
        return loaderOrItemList;
    }

    render() {
        let itemDetails = undefined;
        if(this.props.selectedItem !== undefined){
            itemDetails = <ItemDetails isSelected={this.props.selectedItem === undefined ? true : false }>
                <CharacterDetails characterSelected={this.props.selectedItem}/>
            </ItemDetails>
        }
        return(<React.Fragment>
                <TryError>
                    {this.printLoaderOrItemList()}
                    {itemDetails}
                </TryError>
            </React.Fragment>)
    }
}