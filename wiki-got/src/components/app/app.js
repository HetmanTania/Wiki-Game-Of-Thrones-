import React from "react";

import HeaderApp from "../header/header";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import Loader from "../loader/loader";
import Error from "../Error/error";
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

    onCharacterClick = (id) =>{
        this.setState({
            selectedCharacter: undefined
        });
        this.serviseGOT.getCharacter(+id).then((res)=>{
            this.setState({
                selectedCharacter: res
            })
        }).catch((e) =>{
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

        let loaderOrItemList;
        if (this.state.isError) {
            loaderOrItemList = <Error/>
        } else if (this.state.isLoad) {
            loaderOrItemList = <Loader/>
        } else {
            loaderOrItemList = <div className="col-md-6">
                <ItemList listItem={this.state.characters} onItemSelected={this.onCharacterClick}/>
            </div>
        }

        let characterDetails = undefined;
        if(this.state.selectedCharacter !== undefined){
            characterDetails =  <div className="col-md-6">
                <PersonDetails charecterSelected={this.state.selectedCharacter}/>
            </div>
        }

        return (
            <div className="container">
                <div>

                    <HeaderApp/>
                    <main className="row">
                        {loaderOrItemList}
                        {characterDetails}
                    </main>
                </div>
            </div>
        );
    }

}