import PriorityQueue from "./PriorityQueue";

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(name) {
        if (!this.adjacencyList[name]) {
            this.adjacencyList[name] = {};
        }
    }

    addEdge(vert1, vert2, weight) {
        this.adjacencyList[vert1][vert2] = weight;
        this.adjacencyList[vert2][vert1] = weight;
    }

    Dijkstra(start, finish) {
        const costFromStartTo = {};
        const checkList = new PriorityQueue();
        const prev = {};

        let current;
        let result = [];
        for (let vert in this.adjacencyList) {
            if (vert === start) {
                costFromStartTo[vert] = 0;
                checkList.enqueue(vert, 0);
            } else {
                costFromStartTo[vert] = Infinity;
            }
            prev[vert] = null;
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
                for (let neighbor in this.adjacencyList[current]) {
                    let costToNeighbor = costFromStartTo[current] + this.adjacencyList[current][neighbor];
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