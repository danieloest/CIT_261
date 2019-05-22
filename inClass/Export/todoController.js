import todoModel from "./todoModel";

export default class todoController {
    constructor(elementID) {
        this.model = new todoModel('todo');
        this.element = document.getElementById(elementID);
    }
}