import React, { Component } from "react";

class ErrorBoundy extends Component{
    constructor(){
        super();
        this.state = {
            hasError: false
        };
    }


    componentDidCatch(error, info){
        this.setState({hasError: true});
    }


    render(){
        if(this.state.hasError)
        return <h1>Ooops. Something went wrong...</h1>
        else
        {
            return this.props.children;
        }
    }
}
export default ErrorBoundy;