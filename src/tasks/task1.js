import React from "react";
import BaseTable from "../components/table";
import LoginForm from "../components/login-form";
import HeaderNav from "../components/header-nav";

export default class task1 extends React.Component {
    render() {
        return (
            <div className="screen-wrapper">
                <HeaderNav />
                <div className="page-title">
                    <h4>Task1</h4>
                </div>
                <div className="main-wrapper">
                    <div className="section">
                        <div className="container">
                            <div className="section-title">
                                <h6 className="caption">Table:</h6>
                            </div>
                            <div className="section-body">
                                <BaseTable />
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <div className="container">
                            <div className="section-title">
                                <h6 className="caption">Form:</h6>
                            </div>
                            <div className="section-body">
                                <LoginForm />
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <div className="container">
                            <div className="section-title">
                                <h6 className="caption">Form Elements:</h6>
                            </div>
                            <div className="section-body">
                                <LoginForm 
                                    showElement = 'true'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}