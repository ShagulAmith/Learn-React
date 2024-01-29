import React from "react";
import HeaderNav from "../components/header-nav";
export default class Task3 extends React.Component {
    userInfo = [
        {"name" : "Name1", "department": "Engg", "dob": "18/12/2000"},
        {"name" : "Name2", "department": "Engg", "dob": "18/12/2000"},
        {"name" : "Name3", "department": "Engg", "dob": "18/12/2000"},
        {"name" : "Name4", "department": "Engg", "dob": "18/12/2000"},
        {"name" : "Name5", "department": "Engg", "dob": "18/12/2000"}
    ]
    render() {
        return(
            <div className="screen-wrapper">
                <HeaderNav />
                <div className="page-title">
                    <h4>Task3</h4>
                </div>

                <div className="main-wrapper">
                    <div className="section">
                        <div className="container">
                            <div className="section-title">
                                <h6 className="caption">Map Method</h6>
                            </div>
                            <div className="section-body">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>name</th>
                                                <th>department</th>
                                                <th>dob</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {/* Using map method to print the data as table format */}
                                        {this.userInfo.map((user, index) => (
                                            <tr key={index}>
                                                <td>{user.name}</td>
                                                <td>{user.department}</td>
                                                <td>{user.dob}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}