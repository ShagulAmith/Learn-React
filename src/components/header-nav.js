import React from "react";
import { NavLink } from 'react-router-dom';

export default class HeaderNav extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header-container">
                    <nav className="navbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
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
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/task6">Task6</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/task7">Task7</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/life-cycle">LifeCycle</NavLink>
                            </li> */}
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}