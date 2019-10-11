import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Todos } from '../../model/todos';
import { TodosService } from '../../service/todos.service';

@Component({
  selector: 'app-delmodal',
  templateUrl: './DeleteTodoModal.component.html',
  styleUrls: ['./DeleteTodoModal.component.scss']
})
export class DelmodalComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal, private todoService: TodosService) { }

  @Input()
  todo: Todos;

  ngOnInit() {
  }

  delete() {
    const result = this.todoService.deleteTodo(this.todo.id);
    if (result) {
      this.activeModal.close("deleted");
    }
  }

}
