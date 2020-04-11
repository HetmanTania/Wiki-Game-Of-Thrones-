import React from "react";

import HeaderApp from "../header/header";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import Loader from "../loader/loader";
import Error from "../Error/error";
import "./app.css"


import ApiGOTService from "../../services/serviseApiGOT";


export default class App extends React.Component {


    constructor(props) {
        super(props);
        this.serviseGOT = new ApiGOTService();
        this.state = {
            characters: undefined,
            isLoad: true,
            isError: false
        };
        this.setStateCharacters();
    }

    onError = (error) => {
        this.setState({
           isError: true,
            isLoad: false
        })
    }
    setStateCharacters() {
        this.serviseGOT.getСharacters().then((result) => {
            let characters = result;
            this.setState(() => {
                return {
                    characters: characters,
                    isLoad: false
                };
            });
        }).catch(this.onError);
    }

    render() {

        let loaderOrItemList;
        if(this.state.isError){
            loaderOrItemList = <Error/>
        }
        else if (this.state.isLoad) {
            loaderOrItemList = <Loader/>
        }
        else {
            loaderOrItemList = <div className="col-md-6">
                <ItemList characters={this.state.characters}/>
            </div>
        }


        return (
            <div className="container">
                <div>

                    <HeaderApp/>
                    <main className="row">

                        {loaderOrItemList}
                        {/*<div className="col-md-6">*/}
                        {/*    <PersonDetails/>*/}
                        {/*</div>*/}
                    </main>
                </div>
            </div>
        );
    }

}