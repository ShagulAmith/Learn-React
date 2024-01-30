import React,{Component} from "react";
import HeaderNav from "../components/header-nav";
import {connect} from "react-redux";

class Task6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText : '',
        }
    }
    handleInputText = (e) => {
        // this.setState({inputText : e.target.value})
        this.props.handleInputVal({type : "INPUT_VALUE", payload: e.target.value})
    }
    handleInput = () => {
        return {
             type : "INPUT_TEXT",
            //  payload : this.state.inputText
            //-- no need because here i can only send e.target.value instead i use state values in store
        }
    }
    handleFormSubmit = () => {
        this.props.handleInputList(this.handleInput());
    }
    render() {
        return (
            <div className="screen-wrapper">
                <HeaderNav />
                <div className="page-title">
                    <h4>Task6</h4>
                </div>

                <div className="main-wrapper">
                    <div className="section">
                        <div className="container">
                            <div className="section-title">
                                <h6 className="caption">Get Text Input</h6>
                            </div>
                            <div className="section-body">
                                <div className="d-flex align-items-center">
                                    <div class="form-group mr-20">
                                        <label for="InputFirst">Enter List Item text</label>
                                        <input 
                                            type="text" 
                                            class="form-control" 
                                            id="InputFirst" 
                                            value={this.props.inputVal}
                                            onChange={this.handleInputText}
                                        />
                                    </div>
                                </div>
                                <button 
                                    type="submit" 
                                    class="btn btn-primary"
                                    onClick={this.handleFormSubmit}
                                >Submit</button>
                                {this.props.userList.map((formVal) => {
                                    return (
                                        <ul>
                                            <li key={formVal}>{formVal}</li>
                                        </ul>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("state",state);
    return {
        userList : state.formReducer.users,
        inputVal : state.formReducer.inputText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputList : dispatch,
        handleInputVal  : dispatch
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Task6);