import React from "react";

export Header from "../header/header"
export ItemList from "../item-list/item-list"
export RersonDetails from "../person-details/person-details"

export default class App extends React.Component{
    render() {
        return (
            <div>
                <Header/>

            </div>
        );
    }
}