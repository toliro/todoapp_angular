import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() name;
  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  close(){
    this.activeModal.close();
  }

}
