import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TodosServiceService } from '../service/todos-service.service';
import { Todos } from '../model/todosinterface';
import { Enumstatus } from '../enums/enumstatus.enum';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal, private todoservice: TodosServiceService) { }

  @Input()
  todo: Todos;

  // usersData: User[];
  name: string;
  description: string;
  status: Enumstatus;
  owner: string;

  title: string;


  ngOnInit() {
    this.title = this.todo ? 'Edit Todo' : 'Add Todo';

    this.name = this.todo ? this.todo.name : "";
    this.description = this.todo ? this.todo.description : "";
    this.status = this.todo ? this.todo.status : Enumstatus.open;
    this.owner = this.todo ? this.todo.owner: "";
  }

  submit() {
    if (this.todo) {
      //Update Todo
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
        this.activeModal.close('fail');
      }
    } else {
      //Create Todo
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
        this.activeModal.close("fail");
      }
    }
  }

 
}

