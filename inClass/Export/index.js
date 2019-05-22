import { todoController } from './todoController';

window.addEventListener('load', function() {
    const myTodoController = new todoController('toDoList');

    console.log(myTodoController);
});