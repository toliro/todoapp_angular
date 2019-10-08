import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delmodal',
  templateUrl: './delmodal.component.html',
  styleUrls: ['./delmodal.component.scss']
})
export class DelmodalComponent implements OnInit {

  constructor(private activeModal : NgbActiveModal) { }

  ngOnInit() {
  }

}
