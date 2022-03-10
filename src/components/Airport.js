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
        <div className="airport">
            <Card>
                <h3>Starting from: </h3>
                <AirportsContainer data={Names} onChooseFrom={setFrom} />
            </Card>
            <Card>
                <h3>Path: </h3>
                <RouteContainer From={from} To={to} />
            </Card>
            <Card>
                <h3>Direciton to:</h3>
                <AirportsContainer data={Names} onChooseFrom={setTo} />
            </Card>
        </div>
    );
}

export default Airport;