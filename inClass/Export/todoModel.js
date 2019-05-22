export default class todoModel {
    constructor(key) {
        this.key = key;
        this.toDos = readLS(this.key) || [];
    }   
    add(data) {

    }
    delete(data) {

    }
    getItems() {

    }
    getFilteredItems(query) {

    }
    complete(id) {

    }
    readLS(key) {
        return JSON.parse(window.localStorage.getItem(key));
    }
    writeLS(key, toDos) {
        window.localStorage.setItem(key, JSON.stringify(toDos));
    }
}