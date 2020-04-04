import React from "react";
import "./person-details.css"

export default class PersonDetails extends React.Component{
    render() {
        return (
            <div>
                <div className="person-details card mb-3">
                    <h3 className="card-header">Jon Snow</h3>
                    <div className="card-body">
                        <h5 className="card-title">Man</h5>
                        <h6 className="card-subtitle text-muted">Culture</h6>
                    </div>
                    <div className="img-person-details">
                    </div>

                    <div className="card-body">
                      <div className="data-born">
                          <p>Born: </p>
                          <p className="card-text born-person">1045.01.04</p>
                      </div>
                        <div className="data-died">
                            <p>Died: </p>
                            <p className="card-text died-person">1095.01.04</p>
                        </div>

                    </div>
                    <ul className="list-group list-group-flush list-aliases-person">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
            </div>
        );
    }
}