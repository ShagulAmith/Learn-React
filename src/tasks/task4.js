import React from "react";
import HeaderNav from "../components/header-nav";

export default class task4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city : '',
            weatherData: null,
        }
    }

    handleCity = (e) => {
        this.setState({city : e.target.value});
    }

    handleButtonClick = async() => {
        const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${this.state.city}`;
        try {
            const response = await fetch(url,{
                method : 'GET',
                headers : {
                    'Content-Type': 'application/json',
                    'X-RapidAPI-Key': 'ea1736c136msh0f5c187e704eedbp15d852jsn9c8eb45d2ffd',
		            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                }
            });
            if(!response.ok) {
                throw new Error("Http Error");
            }
            const data = await response.json();
            this.setState({weatherData : data});
        }
        catch (error) {
            console.log("API Fetch Error",error);
        }
    }
    
    render() {
        const {city, weatherData} = this.state;
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
                                <h6 className="caption">Fetch API</h6>
                            </div>
                            <div className="section-body">
                                <div class="form-group">
                                    <label for="city">City</label>
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        id="city" 
                                        placeholder="Enter City" 
                                        value={city}
                                        onChange={this.handleCity}
                                    />
                                </div>
                                <button 
                                    type="submit" 
                                    class="btn btn-primary"
                                    onClick={this.handleButtonClick}
                                >Submit</button>
                                {/* Printing Weather Api information */}
                                {weatherData && (
                                    <>
                                    <h3>The Weather Report:</h3>
                                    <p>The weather condition for <strong>{city}</strong></p>
                                    <p className="d-flex align-items-center">Temperature : <img width={24} height={24} src={weatherData.current.condition.icon} alt="" /> <strong>{weatherData.current.temp_c}°C</strong></p>
                                    <p>Condition: <strong>{weatherData.current.condition.text}</strong></p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}