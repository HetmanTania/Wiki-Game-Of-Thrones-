import React from "react";
import DataItem from "./data-item";
import ItemDetails from "./item-details";

export default class CharacterDetails extends React.Component{

    render() {

        let characterSelected = this.props.characterSelected;
        let characterDetails = undefined;
        if (characterSelected !== undefined){

            let aliases = characterSelected.aliases.map((el) => {
                    if (el !== "") { return (<li className="list-group-item">{el}</li>)}
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
            if (characterSelected.born !== "") {
                born = <div className="data-born">
                    <p>Born: </p>
                    <p className="card-text born-person">{characterSelected.born}</p>
                </div>
            }

            let died;
            if (characterSelected.died !== "") {
                died = <div className="data-died">
                    <p>Died: </p>
                    <p className="card-text died-person">{characterSelected.died}</p>
                </div>
            }

            characterDetails =
                <div className="col-md-6">
                    <ItemDetails itemSelected={characterSelected}>
                        <DataItem>
                            <h5 className="card-title">{characterSelected.gender}</h5>
                            <h6 className="card-subtitle text-muted">{characterSelected.culture}</h6>
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

            return characterDetails;
        }
    }
}
