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

    addEdge(v1, v2, cost) {
        this.adjList[v1][v2] = cost;
        this.adjList[v2][v1] = cost;
    }

    Dijkstra(start, finish) {
        const costFromStartTo = {};
        const checkList = new PriorityQueue();
        const prev = {};

        let current;
        let result = [];
        for (let v in this.adjList) {
            if (v === start) {
                costFromStartTo[v] = 0;
                checkList.enqueue(v, 0);
            } else {
                costFromStartTo[v] = Infinity;
            }
            prev[v] = null;
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