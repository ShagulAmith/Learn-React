import React,{Component} from "react";
import HeaderNav from "../components/header-nav";

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            updatedCity : '',
            mountTable: null,
        }
    }
    componentDidMount = async() => {
        const tblDataUrl = `https://jsonplaceholder.typicode.com/todos`;
        try {
            const res = await fetch(tblDataUrl);
            if(!res.ok) {
                throw new Error("Http Error! ${urlResponse.status}");
            }
            const data = await res.json();
            this.setState({mountTable : data}, () => {
                console.log(this.state.mountTable);
            });
        }
        catch (error) {
            console.error("Http Error");
        }
    }

    handleCity = (e) => {
        this.setState({city : e.target.value})
    }

    componentDidUpdate(prevProps,prevState) {
        if(prevState.city !== this.state.city) {
            this.setState({updatedCity : this.state.city});
        }
    }

    render() {
        const {mountTable, city, updatedCity} = this.state;
        if (mountTable === null) {
            // Render a loading state or return null
            return <div>Loading...</div>;
        }
        return (
            <div className="screen-wrapper">
                <HeaderNav />
                <div className="page-title">
                    <h4>Task4</h4>
                </div>

                <div className="main-wrapper">
                    <div className="section">
                        <div className="container">
                            <div className="section-title">
                                <h6 className="caption">Component DidMount</h6>
                            </div>
                            <div className="section-body">
                                {/* {this.state.mountTable} */}
                                <table>
                                    <thead>
                                        <tr>
                                            <td>ID</td>
                                            <td>TITLE</td>
                                            <td>STATUS</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {mountTable.slice(0,5).map(mount => {
                                            return (
                                                <tr key={mount.id}>
                                                    <td>{mount.id}</td>
                                                    <td>{mount.title}</td>
                                                    <td>{mount.completed}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <div className="container">
                            <div className="section-title">
                                <h6 className="caption">Component DidUpdate</h6>
                            </div>
                            <div className="section-body">
                                <div class="form-group">
                                    <label for="city">Enter City Name</label>
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        id="city" 
                                        placeholder="Enter City" 
                                        value={city}
                                        onChange={this.handleCity}
                                    />
                                </div>
                                {updatedCity ? `City: ${city}` : ""}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default LifeCycle;