import './RouteContainer.scss'
import { useState } from 'react';
import Graph from "../../Graph";
import Names from "../../AirportData/AirportNames";
import Routes from "../../AirportData/AirportRoutes";
import Route from "../Route/Route"

function RouteContainer(props) {
    const g = new Graph();
    const [from, setFrom] = useState();
    const [to, setTo] = useState();
    const [route, setRoute] = useState();

    Names.forEach(element => {                                   // Dodawanie wierzchołków grafu: Nazwy portów docelowych
        g.addVertex(element);
    });

    Routes.forEach(element => {                                  // Dodawanie krawędzi grafu: Trasa od - do wraz z kosztem 
        g.addEdge(                                               // Koszt ~= odleglość faktyczna(samolotowa) / 100 
            element.path[0], 
            element.path[1], 
            element.cost
        );
    });

    if(props.From !== undefined && props.To !== undefined){
        if(props.From !== from || props.To !== to){
            setFrom(props.From);
            setTo(props.To);
            setRoute(g.Dijkstra(props.From, props.To));
        }
    }

    console.log(route);

    return (
        <div className="routeContainer">
            {
                from === to ? <h2>You're already here !</h2> : <div><h2>Path: </h2> <Route data={route} /></div>
            }
        </div>
    );
}

export default RouteContainer;