import React from "react";
import HeaderApp from "../header/header";
import CharacterPage from "../character-page/character-page";
import Page from "../page/page";
import "./app.css"


import ApiGOTService from "../../services/serviseApiGOT";


export default class App extends React.Component {

    serviseGOT = new ApiGOTService();
    state = {
        characters: undefined,
        selectedItem: undefined,
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
            selectedItem: undefined
        });
        this.serviseGOT.getCharacter(+id).then((res) => {
            this.setState({
                selectedItem: res
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
                        <Page itemList={this.state.characters}
                              pageState={{isLoad: this.state.isLoad, isError: this.state.isError}}
                              selectedItem={this.state.selectedItem}
                              onItemSelected={this.onCharacterClick}/>
                        {/*<CharacterPage itemList={this.state.characters}*/}
                        {/*               pageState={{isLoad: this.state.isLoad, isError: this.state.isError}}*/}
                        {/*               characterSelected={this.state.selectedCharacter}*/}
                        {/*               onItemSelected={this.onCharacterClick}/>*/}
                    </main>
                </div>
            </div>
        );
    }

}