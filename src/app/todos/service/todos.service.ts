import { Injectable } from '@angular/core';
import { Todos } from '../model/todos';
import { Todostatus } from '../enums/TodoStatus.enum';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todoData = [
    {
      id: "1",
      name: "Testing",
      description: "Unit Testing",
      status: Todostatus.open,
      owner: "1"
    },
    {
      id: "2",
      name: "Devolepment",
      description: "Web Development",
      status: Todostatus.open,
      owner: "1"

    },
    {
      id: "3",
      name: "Testing",
      description: "Production Testing",
      status: Todostatus.open,
      owner: "2"

    },
    {
      id: "4",
      name: "Developement",
      description: "Web Development",
      status: Todostatus.pending,
      owner: "3"

    },
    {
      id: "5",
      name: "Developement",
      description: "Web Development",
      status: Todostatus.pending,
      owner: "3"

    },
    {
      id: "6",
      name: "Developement",
      description: "Web Development",
      status: Todostatus.pending,
      owner: "3"

    },

    {
      id: "7",
      name: "Developement",
      description: "Web Development",
      status: Todostatus.pending,
      owner: "3"

    },

    {
      id: "8",
      name: "Testing",
      description: "Unit Testing",
      status: Todostatus.open,
      owner: "5"
    },

    {
      id: "9",
      name: "Testing",
      description: "Unit Testing",
      status: Todostatus.open,
      owner: "6"
    },

    {
      id: "10",
      name: "Testing",
      description: "Unit Testing",
      status: Todostatus.open,
      owner: "7"
    },
    
  ]


  constructor() {
  }

  getAllTodos() {
    return this.todoData;
  }

  getPageTodos(page: number, pageSize: number): Todos[] {
    return this.todoData.slice((page - 1) * pageSize, page * pageSize);
  }


  saveTodo(todo: Todos): Todos {
    //add 1 to id of the last element
    let tid: string;
    tid = (parseInt(this.todoData[this.todoData.length - 1].id) + 1).toString();
    todo.id = tid;
    this.todoData.push(todo);
    console.log(todo);
    return todo;
  }

  deleteTodo(id: string): Todos {
    const todoId = this.findById(id);
    const index = this.todoData.indexOf(todoId);
    return todoId ? this.todoData.splice(index, 1)[0] : null;
  }


  findById(id: string): Todos {
    const findUser = this.todoData.filter(found => {
      return found.id === id;
    });
    return findUser[0];
  }

  updateTodo(todo: Todos): Todos {
    const findTodo = this.findById(todo.id);
    findTodo.name = todo.name;
    findTodo.description = todo.description;
    findTodo.status = todo.status;
    findTodo.owner = todo.owner;
    return findTodo;
  }

  getFilteredTodos(page: number, pageSize: number, searchText: string): Todos[] {
    const filtered = this.todoData.filter(todo => {
      return (
        todo.name.toLowerCase().includes(searchText) ||
        todo.description.toLowerCase().includes(searchText) ||
        todo.status.toLowerCase().includes(searchText)
      );
    });
    return filtered.slice((page - 1) * pageSize, page * pageSize);
  }

}
