import React, { Component } from "react";
import HeaderNav from "../components/header-nav";


export default class task2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number1 : '',
            number2 : '',
            result : '',
            numbers : {},
            error : {}
        }
    }
    // handlenumber1 = (e) => {
    //     this.setState({number1 : e.target.value})
    // }
    // handlenumber2 = (e) => {
    //     this.setState({number2 : e.target.value})
    // }

    handlenumber = (e) => {
        const numbers = this.state.numbers;
        numbers[e.target.name] = e.target.value;
        this.setState({numbers : numbers});
    }

    handleAddition = (e) => {
        e.preventDefault();
        const numbers = this.state.numbers;
        const error = {};
        let showError = false;
        let sum = 0;
        if(numbers.number1 === null || numbers.number1 === undefined || numbers.number1 === "" || numbers.number1 === "0") {
            showError = true;
            error["number1"] = "Enter Valid Number"
        }
        if(!numbers.number2) {
            showError = true;
            error["number2"] = "Enter Valid Number"
        }
        sum = parseInt(numbers.number1) + parseInt(numbers.number2);
        this.setState({result : sum});
        this.setState({error});
        return showError;
    }

    //Handling Addition without any click event
    // componentDidUpdate(prevProps,prevState) {
    //     const {number1, number2, result} = this.state;
    //     let sum = 0;
    //     if(number1 !== prevState.number1 || number2 !== prevState.number2){
    //         sum = parseInt(number1) + parseInt(number2);
    //         this.setState({result : sum});
    //     }
    // }
    render() {
        const {numbers, result, error} = this.state;
        console.log(JSON.stringify(error))
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
                                <h6 className="caption">Add Two Numbers:</h6>
                            </div>
                            <div className="section-body">
                                <div class="form-group">
                                    <label for="number1">First Number <span>*</span></label>
                                    <input
                                        type="number"
                                        class="form-control"
                                        id="number1"
                                        name="number1"
                                        placeholder="Enter First Number"
                                        value={numbers.number1}
                                        onChange={this.handlenumber}
                                    />
                                    {error.number1 ? <span className="error-msg">{error.number1}</span> : ''}
                                </div>
                                
                                <div class="form-group">
                                    <label for="number2">Second Number <span>*</span></label>
                                    <input
                                        type="number"
                                        class="form-control"
                                        id="number2"
                                        name="number2"
                                        placeholder="Enter Second Number"
                                        value={numbers.number2}
                                        onChange={this.handlenumber}
                                    />
                                    {error.number2 ? <span className="error-msg">{error.number2}</span> : ''}
                                </div>
                                
                                <button className="btn btn-primary" onClick={this.handleAddition}>Add Numbers</button>
                                {/* We can't directly print entire object in react, instead we can convert it to string and then print it */}
                                {/* {JSON.stringify(numbers)} */}
                                {result ? <p>The sum is : <b>{result}</b></p> : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}