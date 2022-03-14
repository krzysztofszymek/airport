import Queue from "./Queue";

class Graph {
    constructor() {
        this.adjList = {};
    }

    addVertex(name) {                                             //Tworzenie listy wierzchołków
        if (!this.adjList[name]) {
            this.adjList[name] = {};
        }
    }

    addEdge(vertex1, vertex2, cost) {                             //Mapowanie przyległych wierzchołków
        this.adjList[vertex1][vertex2] = cost;
        this.adjList[vertex2][vertex1] = cost;
    }

    Dijkstra(start, end) {
        const costFromStartTo = {};                               //Czysta mapa
        const checked = new Queue();                              //Tworzenie kolejki sprawdzonych sciezek
        const previous = {};                                      //Poprzednie 

        let curr;
        let result = [];

        for (let vert in this.adjList) {                          //Przypisanie odleglosci 0 do startoweggo wierzchołka
            if (vert === start) {                                 //i 'infinity' do pozostałch
                costFromStartTo[vert] = 0;
                checked.enqueue(vert, 0);
            }
            else {
                costFromStartTo[vert] = Infinity;
            }
            previous[vert] = null;
        }

        while (checked.values.length) {                            //Pętla wykonywania dopoki znajduja sie wartosci w kolejce
            curr = checked.dequeue().val;                          //Pobranie pierwszej wartosci z kolejki i przypisanie jej wartosci

            if (curr === end) {                                    
                while (previous[curr]) {
                    result.push(curr);
                    curr = previous[curr];
                }
                break;
            }

            else {
                for (let neighbor in this.adjList[curr]) {          //Petla dla sasiadow obecnego wierzcholka
                    let costToNeighbor = costFromStartTo[curr] + this.adjList[curr][neighbor];

                    if (costToNeighbor < costFromStartTo[neighbor]) {//Porownanie kosztow dla kazdego sasiada wierzcholka
                        costFromStartTo[neighbor] = costToNeighbor;  //Nadpisanie kosztu nowym najmniejszym kosztem
                        previous[neighbor] = curr;                   //Zmiana najnizszego sasiada na obecny wierzcholek
                        checked.enqueue(neighbor, costToNeighbor);   //Zapisanie sasiada wraz z kosztem do kolejki
                    }
                }
            }
        }

        return result.concat(curr).reverse();
    }
}

export default Graph