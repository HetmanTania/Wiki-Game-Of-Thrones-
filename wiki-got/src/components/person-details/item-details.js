import React from "react";
import "./person-details.css"
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
            let aliases = itemSelected.aliases.map(
                (el) => {
                    return (<li className="list-group-item">{el}</li>)
                });


                loaderOrDatails = <React.Fragment>

                <h3 className="card-header">{itemSelected.name}</h3>
                {this.props.children}
                {/*<div className="card-body">*/}
                {/*    <h5 className="card-title">{itemSelected.gender}</h5>*/}
                {/*    <h6 className="card-subtitle text-muted">{itemSelected.culture}</h6>*/}
                {/*</div>*/}
                {/*<div className="img-person-details">*/}
                {/*</div>*/}

                {/*<div className="card-body">*/}
                {/*    <div className="data-born">*/}
                {/*        <p>Born: </p>*/}
                {/*        <p className="card-text born-person">{itemSelected.born}</p>*/}
                {/*    </div>*/}
                {/*    <div className="data-died">*/}
                {/*        <p>Died: </p>*/}
                {/*        <p className="card-text died-person">{itemSelected.died}</p>*/}
                {/*    </div>*/}

                {/*</div>*/}

                {/*<ul className="list-group list-group-flush list-aliases-person">*/}
                {/*    {aliases}*/}
                {/*</ul>*/}
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