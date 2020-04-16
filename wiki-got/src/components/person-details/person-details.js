import React from "react";
import "./person-details.css"
import Loader from "../loader/loader";
import ApiGOTService from "../../services/serviseApiGOT";

export default class PersonDetails extends React.Component {

    render() {

        let loaderOrDatails;
        if(this.props.cherecterSelected === undefined){
            loaderOrDatails = <Loader/>
        }
        else {

            let cherecterSelected = this.props.cherecterSelected;
            loaderOrDatails  =  <React.Fragment>

                <h3 className="card-header">{cherecterSelected.name}</h3>
                <div className="card-body">
                    <h5 className="card-title">{cherecterSelected.gender}</h5>
                    <h6 className="card-subtitle text-muted">{cherecterSelected.culture}</h6>
                </div>
                <div className="img-person-details">
                </div>

                <div className="card-body">
                    <div className="data-born">
                        <p>Born: </p>
                        <p className="card-text born-person">{cherecterSelected.born}</p>
                    </div>
                    <div className="data-died">
                        <p>Died: </p>
                        <p className="card-text died-person">{cherecterSelected.died}</p>
                    </div>

                </div>
                <ul className="list-group list-group-flush list-aliases-person">

                </ul>
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