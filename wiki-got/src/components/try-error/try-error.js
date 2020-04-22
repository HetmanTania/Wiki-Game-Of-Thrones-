import React from "react";
import Error from "../Error/error";

export  default class TryError extends React.Component {

    state = {
        isError: false
    }

    componentDidCatch() {
        this.setState({isError: true});
    }

    render() {
        if (this.state.isError) {
            return <Error/>
        }
        return this.props.children;
    }
}
