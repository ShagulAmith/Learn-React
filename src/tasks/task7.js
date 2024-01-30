import React,{Component} from "react";
import {connect} from "react-redux";
import jsonFile from "./todos.json";
import HeaderNav from "../components/header-nav";

class Task7 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
        }
    }

    handleJsonFile = async() => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
            if(!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            const resData = await response.json();
            this.setState({ data: resData }, () => {
                // Use the callback function to ensure state is updated before dispatching
                this.props.handleJsonData({ type: "JSON_DATA", payload: this.state.data });
            });
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    handleLocalJsonFile = () => {
        this.props.handleJsonData({type: "JSON_DATA", payload:jsonFile});
    }

    componentDidMount() {
        // this.handleJsonFile();
        this.handleLocalJsonFile();
    }

    calculateFileSize = () => {
        const {jsonDataList} = this.props;
        const jsonString = JSON.stringify(jsonDataList); 
        const data = new Blob([jsonString]).size;
        const kb = data / 1024;
        return kb.toFixed(2) + 'KB';
    };

    render () {
        return (
            <div className="screen-wrapper">
                <HeaderNav />
                <div className="main-wrapper">
                    <div className="section">
                        <div className="container">
                            <div className="section-title">
                                <h6 className="caption">JSON File Size Check</h6>
                            </div>
                            <div className="section-body">
                            <p>The Json File Size is : <strong className="text-primary">{this.calculateFileSize()}</strong></p>
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
        jsonDataList : state.jsonSizeReducer.jsonData,
        name : state.formReducer.inputText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleJsonData : dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Task7);