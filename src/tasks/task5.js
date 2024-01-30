import React from "react";
import HeaderNav from "../components/header-nav";
import LoginForm from "../components/login-form";

export default class task5 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formValues: {},
        }
        this.handleLoginCredentials = this.handleLoginCredentials.bind(this);
    }
    //getting data from child and adding to parent state object
    handleLoginCredentials = (formObjectData) => {
        let formValues = formObjectData;
        this.setState({formValues});
    }

    render() {
        return (
            <div className="screen-wrapper">
                <div className="page-title">
                    <h4>Login Page:</h4>
                </div>
                <div className="main-wrapper">
                    <div className="section">
                        <div className="container">
                            <div className="section-title">
                                <h6 className="caption">Form Validation</h6>
                            </div>
                            <div className="section-body">
                                <LoginForm 
                                    getLoginCredentials = {this.handleLoginCredentials}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}