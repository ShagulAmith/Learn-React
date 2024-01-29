import React,{Component} from "react";
import { Navigate } from "react-router-dom";

export default class PrivateRouter extends Component {
    render() {
        const loginStatus = localStorage.getItem('loginStatus');
        return (
            <>
                {loginStatus ? this.props.children : <Navigate to='/task5' />}
            </>
        )
    }
}