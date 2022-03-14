class Queue {
    constructor(){
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({val, priority});                          //Dodanie krawedzi wraz z kosztem do kolejki
        this.sort();                                                //Sortowanie kolejki 
    };

    dequeue() {
        return this.values.shift();                                 //Usuniecie i zwrocenie wartosci pierwszego obiektu z kolejki
    };
    
    sort() {
        this.values.sort((a, b) => a.priority - b.priority);        //Sortowanie kolejki wedlug pirorytetow
    };
}

export default Queue