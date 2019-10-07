import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-editmodal',
  templateUrl: './editmodal.component.html',
  styleUrls: ['./editmodal.component.scss']
})
export class EditmodalComponent implements OnInit {

  @Input() name;
  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }


}
