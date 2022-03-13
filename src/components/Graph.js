import PriorityQueue from "./PriorityQueue";

class Graph {
    constructor() {
        this.adjList = {};
    }

    addVertex(name) {
        if (!this.adjList[name]) {
            this.adjList[name] = {};
        }
    }

    addEdge(vertex1, vertex2, cost) {
        this.adjList[vertex1][vertex2] = cost;
        this.adjList[vertex2][vertex1] = cost;
    }

    Dijkstra(start, finish) {
        const costFromStartTo = {};
        const checkList = new PriorityQueue();
        const prev = {};

        let current;                                        
        let result = [];
        for (let vertex in this.adjList) {
            if (vertex === start) {
                costFromStartTo[vertex] = 0;
                checkList.enqueue(vertex, 0);
            } else {
                costFromStartTo[vertex] = Infinity;
            }
            prev[vertex] = null;
        }

        while (checkList.values.length) {
            current = checkList.dequeue().val;
            if (current === finish) {
                while (prev[current]) {
                    result.push(current);
                    current = prev[current];
                }
                break;
            }
            else {
                for (let neighbor in this.adjList[current]) {
                    let costToNeighbor = costFromStartTo[current] + this.adjList[current][neighbor];
                    if (costToNeighbor < costFromStartTo[neighbor]) {
                        costFromStartTo[neighbor] = costToNeighbor;
                        prev[neighbor] = current;
                        checkList.enqueue(neighbor, costToNeighbor);
                    }
                }
            }
        }
        return result.concat(current).reverse();
    }
}

export default Graph