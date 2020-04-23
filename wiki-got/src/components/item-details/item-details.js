import React from "react";
import "./item-details.css"
import Loader from "../loader/loader";
import ApiGOTService from "../../services/serviseApiGOT";
import DataItem from "./data-item";

export default class ItemDetails extends React.Component {

    render() {

        let loaderOrDatails;
        if (this.props.itemSelected === undefined) {
            loaderOrDatails = <Loader/>
        } else {
            let itemSelected = this.props.itemSelected;
            loaderOrDatails =
                <React.Fragment>
                    <h3 className="card-header">{itemSelected.name}</h3>
                    {this.props.children}
                </React.Fragment>
        }
        return (
            <div>
                <div className="person-details card mb-3">
                    {loaderOrDatails}
                </div>
            </div>
        );
    }
}