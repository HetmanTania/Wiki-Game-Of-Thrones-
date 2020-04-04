import React from "react";

import HeaderApp from "../header/header";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";

import "./app.css"


import ApiGOTService from "../../services/serviseApiGOT";


let f = () => {
    let s = new ApiGOTService();
    s.getСharacters().then((ch) => {
        console.log(ch);
    })
}

f();

export default class App extends React.Component {





    render() {
        return (
            <div className="container">
                <div>

                    <HeaderApp/>
                    <main className="row">
                        <div className="col-md-6">
                            <ItemList/>
                        </div>
                        <div className="col-md-6">
                            <PersonDetails/>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}