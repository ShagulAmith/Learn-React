import React from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';

class HeaderNav extends React.Component {
    handleLogout = () => {
        localStorage.clear();
        window.location.href = "/task5";
    }
    render() {
        const userStr = this.props.userName;
        const usernameArr = userStr.split('@');
        const user = usernameArr[0];

        return (
            <div className="header">
                <div className="header-container">
                    <nav className="navbar">
                        <ul className="navbar-nav">
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/">Task1</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/task2">Task2</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/task3">Task3</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/task4">Task4</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/task5">Task5</NavLink>
                            </li> */}
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/life-cycle">LifeCycle</NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/task6">Task6</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/task7">Task7</NavLink>
                            </li>
                        </ul>
                        <div style={{marginLeft: "auto"}}>
                            <span>Hi, <strong className="text-primary" style={{marginRight: '20px'}}>{user}</strong></span>
                            <button className="btn" onClick={this.handleLogout}>logout</button>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log("userName" , state.loginReducer.loginData[0].email)
    return {
        userName : state.loginReducer.loginData[0].email,
    }
}
export default connect(mapStateToProps) (HeaderNav);