import { Component, OnInit } from '@angular/core';
import { TodosServiceService } from '../service/todos-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private service: TodosServiceService) { }

  ngOnInit() {
  }

  openModal(content) {
    this.service.openModal(content);
  }

}
