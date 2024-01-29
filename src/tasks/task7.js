import React,{Component} from "react";
import {connect} from "react-redux";

class Task7 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
        }
    }

    handleJsonFile = async() => {
        // const url = `./products.json`;
        try {
            // const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
            // const response = await fetch(`./todos.json`);
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

    componentDidMount() {
        this.handleJsonFile();
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
            <>
                <h1>Redux</h1>
                <p>The Json File Size is : <strong className="text-primary">{this.calculateFileSize()}</strong></p>
                {/* <p>{this.props.name}</p> */}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("state",state);
    return {
        jsonDataList : state.jsonSizeReducer.jsonData,
        // name : state.formReducers.inputText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleJsonData : dispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Task7);