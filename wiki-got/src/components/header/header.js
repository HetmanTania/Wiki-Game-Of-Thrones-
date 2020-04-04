import React from "react";
import "./header.css";

export default class HeaderApp extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Wiki Game of Thrones </h1>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a href="#" className="route-ref nav-link active">Characters</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="route-ref nav-link">Homes</a>
                        </li>
                    </ul>

                </header>
            </div>
        );
    }
}