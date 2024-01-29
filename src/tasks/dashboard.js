import React from "react";
import BaseTable from "../components/table";

export default class Dashboard extends React.Component {
    /* Handle Logout */
    handleLogout = () => {
        localStorage.clear();
        window.location.href = "/task5";
    }
    render() {
        return (
            <div className="screen-wrapper">
                <div 
                    style={{textAlign: 'right', marginBottom: '20px'}}>
                        <button className="btn" onClick={this.handleLogout}>logout</button>
                </div>
                <div className="main-wrapper">
                    <div className="section">
                        <div className="container">
                            <div className="section-title">
                                <h6 className="caption">Dashboard</h6>
                            </div>
                            <div className="section-body">
                                <BaseTable />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}