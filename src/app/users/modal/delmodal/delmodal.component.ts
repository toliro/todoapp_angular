import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../service/user.service';
import { Users } from '../../model/user';

@Component({
  selector: 'app-delmodal',
  templateUrl: './delmodal.component.html',
  styleUrls: ['./delmodal.component.scss']
})
export class DelmodalComponent implements OnInit {

  constructor(private activeModal : NgbActiveModal, private service: UserService) { }

  @Input()
  user: Users;

  ngOnInit() {
  }

  delete() {
    const result = this.service.deleteUser(this.user.id);
    if (result) {
      this.activeModal.close('deleted');
    }
  }

}
