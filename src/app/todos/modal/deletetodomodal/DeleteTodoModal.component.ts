import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TodoService } from 'src/app/services/todo.service';
import { Todos } from '../../model/todos';

@Component({
  selector: 'app-delmodal',
  templateUrl: './DeleteTodoModal.component.html',
  styleUrls: ['./DeleteTodoModal.component.scss']
})
export class DelmodalComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal, private todoService: TodoService) { }

  @Input()
  todo: Todos;

  ngOnInit() {
  }

  delete() {
    const result = this.todoService.deleteTodos(this.todo.id);
    if (result) {
      this.activeModal.close("deleted");
    }
  }

}
