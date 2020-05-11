import React from "react";
import "./item-details.css"
import Loader from "../loader/loader";
import ApiGOTService from "../../services/serviseApiGOT";
import DataItem from "./data-item";

export default class ItemDetails extends React.Component {

    render() {

        let loaderOrDatails;
        if (this.props.isSelected === true) {
            loaderOrDatails = <Loader/>
        } else {
            loaderOrDatails = this.props.children;
        }
        return (

            <div className="col-md-6 mb-3">
                    {loaderOrDatails}
             </div>
        );
    }
}