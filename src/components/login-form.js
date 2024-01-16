import React from "react";

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showElement : props.showElement,
            formValues: {},
            error: {},
        }
        this.handleFormValidate = this.handleFormValidate.bind(this);
    }

    
    // For handling forms creating one object and storing data
    handleFormValues = (e) => {
        let formValues = this.state.formValues; // copy of state object
        formValues[e.target.name] = e.target.value; // [] is one of the method to access the object values, here we try to dynamically update the object PAIR using []
        this.setState({formValues});
    }

    // Form Validation
    handleFormValidate = () => {
        let formValues = this.state.formValues;
        let isFormValid = true;
        let error= {};
        //email check
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if(!formValues["email"] || !formValues["email"].match(pattern)) {
            isFormValid = false;
            error["email"] = "Please Enter Email Address";
        }

        //password check
        var passwordPattern = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
        if(!formValues["password"] || !formValues["password"].match(passwordPattern)) {
            isFormValid = false;
            error["password"] = "Your Password does not match the requirements";
        }
        this.setState({error});
        return isFormValid;
    }
    handleLoginPage = (e) => {
        e.preventDefault();
        const { history } = this.props;
        if(this.handleFormValidate()) {
            this.props.getLoginCredentials(this.state.formValues);
            localStorage.setItem("loginStatus",1);
            window.location.href = "/dashboard";
        }
    }

    render() {
        const {showElement, formValues, error} = this.state;
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
                            value={formValues.email}
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
                            value={formValues.password}
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