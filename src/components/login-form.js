import React from "react";
import { connect } from "react-redux";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formValues : {},
            error : {},
            showErrorMsg : '',
        }
    }

    handleFormValues = (e) => {
        const formValues = this.state.formValues;
        formValues[e.target.name] = e.target.value;
        this.setState({formValues});
    }

    handleLogin = () => {
        const formValues = this.state.formValues;
        const error = this.state.error;
        let showError = true;
        const emailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passValidate = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if(!formValues["email"] || !formValues["email"].match(emailValidate)) {
            showError = false;
            error["email"] = "Please Enter Valid Email ID";
        }
        if(!formValues["password"] || !formValues["password"].match(passValidate)) {
            showError = false;
            error["password"] = "Please Enter Valid Password";
        }
        this.setState({error});
        return showError;
    }

    handleLoginPage = (e) => {
        e.preventDefault();
        if(this.handleLogin()){
            // console.log("true");
            this.props.handleLoginStore({type : "LOGIN_DATA" , payload : this.state.formValues});
            localStorage.setItem('loginStatus','true');
            window.location.href="/dashboard";
        }
    }

render() {
    const { showElement, formValues, error, showErrorMsg } = this.state;
    return (
        <>
            <form>
                <div class="form-group">
                    <label for="emailAddress">Email Address <span>*</span></label>
                    <input
                        type="email"
                        class="form-control"
                        id="emailAddress"
                        name="email"
                        placeholder="Enter Email Address"
                        value={formValues && formValues.email}
                        onChange={this.handleFormValues}
                    />
                    {error.email && <span className="error-msg">{error.email}</span>}
                </div>
                <div class="form-group">
                    <label for="password">Password <span>*</span></label>
                    <input
                        type="password"
                        class="form-control"
                        id="password"
                        name="password"
                        placeholder="Enter Password"
                        value={formValues && formValues.password}
                        onChange={this.handleFormValues}
                    />
                    {error.password &&
                        (
                            <>
                                <span className="error-msg">{error.password}</span>
                                <ul className="password-hint">
                                    <li>1. Minimum length is 8 characters</li>
                                    <li>2. Should have one capital character</li>
                                    <li>2. Should have one special character</li>
                                </ul>
                            </>
                        )
                    }
                </div>
                {showElement ?
                    (
                        <>
                            <div className="form-group">
                                <label for="gender">Gender</label>
                                <div className="form-check">
                                    <input type="radio" id="male" name="fav_language" />
                                    <label for="male">Male</label>
                                </div>
                                <div className="form-check">
                                    <input type="radio" id="female" name="fav_language" />
                                    <label for="female">Female</label>
                                </div>
                                <div className="form-check">
                                    <input type="radio" id="others" name="fav_language" />
                                    <label for="others">others</label>
                                </div>
                            </div>

                            <div className="form-group">
                                <label for="address">Address</label>
                                <textarea name="Address" rows="3" placeholder="Enter Address"></textarea>
                            </div>

                            <div className="form-group">
                                <label htmlFor="country">Country</label>
                                <select id="cars" name="cars">
                                    <option value=""></option>
                                    <option value="india">India</option>
                                    <option value="australia">Australia</option>
                                    <option value="china">China</option>
                                    <option value="uk">Uk</option>
                                </select>
                            </div>
                        </>
                    )
                    : ''
                }
                <button
                    type="submit"
                    class="btn btn-primary"
                    onClick={this.handleLoginPage}
                >Login</button>
            </form>
        </>
    )
}
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoginStore : dispatch,
    }
}
export default connect(null,mapDispatchToProps) (LoginForm);