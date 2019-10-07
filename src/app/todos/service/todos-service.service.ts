import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Todos } from '../model/todosinterface';

@Injectable({
  providedIn: 'root'
})
export class TodosServiceService {

  todoData = [
    {
        id: "1",
        name: "Testing",
        description: "Unit Testing",
        status: "In-Progress",
        owner: "1"
    },
    {
        id: "2",
        name: "Devolepment",
        description: "Web Development",
        status: "In-Progress",
        owner: "1"
    },
    {
        id: "3",
        name: "Testing",
        description: "Production Testing",
        status: "In-Progress",
        owner: "2"
    },
    {
        id: "4",
        name: "Developement",
        description: "Web Development",
        status: "In-Progress",
        owner: "3"
    },
    
]

filered: any[];

  constructor(private modalService: NgbModal) { 
  }

  onUpdate(){

  }

  onDelete(){

  }

  // getTodo((userId) =>{
  //   const foundUser = this.todoData.findIndex(this.todoData.id ===userId);
  //   return foundUser;
  // })

  

  getTodos(){
    return this.todoData;
  }

  saveTodo(todos: Todos){
    this.todoData.push(todos);
  }

}
