import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TodosServiceService } from '../../service/todos-service.service';
import { Todos } from '../../model/todosinterface';

@Component({
  selector: 'app-delmodal',
  templateUrl: './delmodal.component.html',
  styleUrls: ['./delmodal.component.scss']
})
export class DelmodalComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal, private todoService: TodosServiceService) { }

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
