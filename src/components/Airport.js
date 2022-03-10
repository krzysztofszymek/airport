import './Airport.scss'
import Names from "./AirportData/AirportNames";
import Routes from "./AirportData/AirportRoutes";
import Graph from "./Graph";
import AirportsContainer from "./UI/AirportsContainer/AirportsContainer";
import RouteContainer from './UI/RouteContainer/RouteContainer';
import Card from './UI/Card/Card';
import { useState } from 'react';

function Airport() {
    const g = new Graph();
    const [from, setFrom] = useState();
    const [to, setTo] = useState();

    // Dodawanie wierzchołków grafu: Nazwy portów docelowych
    Names.forEach(element => { 
        g.addVertex(element);
    });

    // Dodawanie krawędzi grafu: Trasa od - do wraz z kosztem 
    // Koszt ~= odleglość faktyczna(samolotowa) / 100 
    Routes.forEach(element => { 
        g.addEdge(
            element.path[0], 
            element.path[1], 
            element.cost
        );
    });

    console.log(g.Dijkstra('ATH', 'LIS'));

    return (
        <div className="airport">
            <Card>
                <h3>Starting from: </h3>
                <AirportsContainer data={Names} onChooseFrom={setFrom} />
            </Card>
            <Card>
                <h3>Path: </h3>
                <RouteContainer />
            </Card>
            <Card>
                <h3>Direciton to:</h3>
                <AirportsContainer data={Names} onChooseTo={setTo} />
            </Card>
        </div>
    );
}

export default Airport;