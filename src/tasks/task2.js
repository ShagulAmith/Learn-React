import React from "react";
import HeaderNav from "../components/header-nav";

export default class Task2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number1 : '',
            number2 : '',
            result: ''
        }
    }
    // Get First Number
    handleNumber1Change = (e) => {
        const value = e.target.value;
        const numericInput = value.replace(/[^0-9]/g, '');
        this.setState({number1: numericInput});
    }
    // Get Second Number
    handleNumber2Change = (e) => {
        this.setState({number2: e.target.value});
    }
    //Addition
    handleAddNumbers = () => {
        const {number1, number2} = this.state;
        const num1 = parseInt(number1) || 0; //making it whole number, use first value if user enter else take default value
        const num2 = parseInt(number2) || 0;
        const sum = num1 + num2;
        this.setState({result: sum});
    }
    render() {
        const {number1, number2, result} = this.state;
        return (
            <div className="screen-wrapper">
                <HeaderNav />
                <div className="page-title">
                    <h4>Task2</h4>
                </div>

                <div className="main-wrapper">
                    <div className="section">
                        <div className="container">
                            <div className="section-title">
                                <h6 className="caption">Add Two Number</h6>
                            </div>
                            <div className="section-body">
                                <div className="d-flex align-items-center">
                                    <div class="form-group mr-20">
                                        <label for="InputFirst">Number 1</label>
                                        <input 
                                            type="number" 
                                            class="form-control" 
                                            id="InputFirst" 
                                            value={number1}
                                            onChange={this.handleNumber1Change}
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="InputFirst">Number 2</label>
                                        <input 
                                            type="number" 
                                            class="form-control" 
                                            id="InputFirst" 
                                            value={number2}
                                            onChange={this.handleNumber2Change}
                                        />
                                    </div>
                                </div>
                                <button 
                                    type="submit" 
                                    class="btn btn-primary"
                                    onClick={this.handleAddNumbers}
                                >Add Numbers</button>
                                {result ? <p>Result output : <strong>{result}</strong></p> : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}