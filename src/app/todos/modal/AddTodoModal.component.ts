import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Todos } from '../model/todos';

import { TodoService } from 'src/app/services/todo.service';
import { Todostatus } from '../enums/todostatus.enum';

@Component({
  selector: 'app-modal',
  templateUrl: './AddTodoModal.component.html',
  styleUrls: ['./AddTodoModal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal, private todoservice: TodoService) { }

  @Input()
  todo: Todos;

  // usersData: User[];
  name: string;
  description: string;
  status: Todostatus;
  owner: string;

  modalTitle: string;


  ngOnInit() {
    this.modalTitle = this.todo ? 'Edit Todo' : 'Add Todo';
    this.name = this.todo ? this.todo.name : "";
    this.description = this.todo ? this.todo.description : "";
    this.status = this.todo ? this.todo.status : Todostatus.open;
    this.owner = this.todo ? this.todo.owner: "";
    console.log(this.todo)
  }

  submit() {
    if (this.todo) {
      //For updating todo
      let editTodo: Todos = {
        id: this.todo.id,
        name: this.name,
        description: this.description,
        status: this.status,
        owner: this.owner
      };
      const result = this.todoservice.updateTodos(editTodo);
      if(result){
        this.activeModal.close('updated');
      }
      else{
        this.activeModal.close('failed');
      }
    } else {
      //For adding Todo
      let addTodo: Todos = {
        id: "",
        name: this.name,
        description: this.description,
        status: this.status,
        owner: this.owner
      };
      const result = this.todoservice.addTodos(addTodo);
      if(result){
        this.activeModal.close('added')
      }else{
        this.activeModal.close("failed");
      }
    }
  }

 
}

