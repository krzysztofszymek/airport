import './Airport.scss'
import Names from "./AirportData/AirportNames";
import AirportsContainer from "./UI/AirportsContainer/AirportsContainer";
import RouteContainer from './UI/RouteContainer/RouteContainer';
import Card from './UI/Card/Card';
import { useState } from 'react';

function Airport() {
    const [from, setFrom] = useState();
    const [to, setTo] = useState();

    return (
        <div className="appContainer">
            <div className="header">
                <img className='heading' src='/img/header.png' alt='Header'/>
                <img className='plane' src='/img/airplane.png' alt='Airplane'/>
            </div>
            <div className="airport">
                <Card>
                    <h2>Starting from: </h2>
                    <AirportsContainer data={Names} onChooseFrom={setFrom} />
                </Card>
                <Card>
                    {
                        (to === undefined || from === undefined) ? <h2>Choose your starting point and destination !</h2> : <div><RouteContainer From={from} To={to} /></div>
                    }
                </Card>
                <Card>
                    <h2>Direction to:</h2>
                    <AirportsContainer data={Names} onChooseFrom={setTo} />
                </Card>
            </div>
        </div>
    );
}

export default Airport;