/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  list = [];
  add(todo) {
    this.list.push(todo);
  }
  remove(index) {
    if (index > this.list.length) return;
    this.list.splice(index, 1);
  }
  update(index, todo) {
    if (index > this.list.length - 1) return;
    this.list[index] = todo;
  }
  getAll() {
    return this.list;
  }
  get(index) {
    if (index > this.list.length - 1) return null;
    return this.list[index];
  }
  clear() {
    this.list = [];
  }
}

module.exports = Todo;
