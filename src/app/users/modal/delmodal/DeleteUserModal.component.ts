import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Users } from '../../model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delmodal',
  templateUrl: './DeleteUserModal.component.html',
  styleUrls: ['./DeleteUserModal.component.scss']
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
