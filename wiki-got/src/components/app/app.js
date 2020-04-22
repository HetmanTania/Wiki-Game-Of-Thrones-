import React from "react";

import HeaderApp from "../header/header";
import ItemList from "../item-list/item-list";
import ItemDetails from "../person-details/item-details";
import Loader from "../loader/loader";
import Error from "../Error/error";
import CharacterPage from "../character-page/character-page";
import "./app.css"


import ApiGOTService from "../../services/serviseApiGOT";


export default class App extends React.Component {

    serviseGOT = new ApiGOTService();
    state = {
        characters: undefined,
        selectedCharacter: undefined,
        isLoad: true,
        isError: false
    };

    componentDidMount() {
        this.setStateCharacters();
    }


    onError = () => {
        this.setState({
            isError: true,
            isLoad: false
        })
    }

    onCharacterClick = (id) => {
        this.setState({
            selectedCharacter: undefined
        });
        this.serviseGOT.getCharacter(+id).then((res) => {
            this.setState({
                selectedCharacter: res
            })
        }).catch((e) => {
            this.onError();
        })

    }

    setStateCharacters() {

        this.serviseGOT.getCharacters().then((res) => {
            let characters = this.serviseGOT.sortByName(res);
            this.setState(() => {
                return {
                    characters: characters,
                    isLoad: false
                };
            });
        }).catch((e) => {
            this.onError();
        });
    }

    render() {

        return (
            <div className="container">
                <div>

                    <HeaderApp/>
                    <main className="row">
                        <CharacterPage itemList={this.state.characters}
                                       pageState={{isLoad: this.state.isLoad, isError: this.state.isError}}
                                       characterSelected={this.state.selectedCharacter}
                                       onItemSelected={this.onCharacterClick}/>
                    </main>
                </div>
            </div>
        );
    }

}