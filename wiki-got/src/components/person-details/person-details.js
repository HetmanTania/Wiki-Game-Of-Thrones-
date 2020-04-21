import React from "react";
import "./person-details.css"
import Loader from "../loader/loader";
import ApiGOTService from "../../services/serviseApiGOT";

export default class PersonDetails extends React.Component {

    render() {

        let loaderOrDatails;
        if(this.props.characterSelected === undefined){
            loaderOrDatails = <Loader/>
        }
        else {

            let charecterSelected = this.props.characterSelected;
            let aliases = this.props.characterSelected.aliases.map(
                (el) => {
                    return (<li className="list-group-item">{el}</li>)
                });


            loaderOrDatails  =  <React.Fragment>

                <h3 className="card-header">{charecterSelected.name}</h3>
                <div className="card-body">
                    <h5 className="card-title">{charecterSelected.gender}</h5>
                    <h6 className="card-subtitle text-muted">{charecterSelected.culture}</h6>
                </div>
                <div className="img-person-details">
                </div>

                <div className="card-body">
                    <div className="data-born">
                        <p>Born: </p>
                        <p className="card-text born-person">{charecterSelected.born}</p>
                    </div>
                    <div className="data-died">
                        <p>Died: </p>
                        <p className="card-text died-person">{charecterSelected.died}</p>
                    </div>

                </div>
                <ul className="list-group list-group-flush list-aliases-person">
                    {aliases}
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