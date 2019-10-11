import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Todostatus } from '../enums/TodoStatus.enum';
import { Todos } from '../model/todos';
import { TodosService } from '../service/todos.service';

@Component({
  selector: 'app-modal',
  templateUrl: './EditTodoModal.component.html',
  styleUrls: ['./EditTodoModal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal, private todoservice: TodosService) { }

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
      const result = this.todoservice.updateTodo(editTodo);
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
      const result = this.todoservice.saveTodo(addTodo);
      if(result){
        this.activeModal.close('added')
      }else{
        this.activeModal.close("failed");
      }
    }
  }

 
}

