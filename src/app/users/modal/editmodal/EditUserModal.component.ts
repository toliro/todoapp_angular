import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Users } from '../../model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-editmodal',
  templateUrl: './EditUserModal.component.html',
  styleUrls: ['./EditUserModal.component.scss']
})
export class EditmodalComponent implements OnInit {

  @Input() 
  user: Users;

  fname: string;
  lname: string;
  occupation: string;
  profile: string;

  title: string;

  constructor(private activeModal: NgbActiveModal,private userservice: UserService) { }

  ngOnInit() {
    this.title = this.user ? 'Edit User' : 'Add User';
    this.fname = this.user ? this.user.firstname : "";
    this.lname = this.user ? this.user.lastname : "";
    this.occupation = this.user ? this.user.occupation :"";
    this.profile = this.user ? this.user.profile: "";

  }

  submit() {
    if (this.user) {
      //updating user
      let editUser: Users = {
        id: this.user.id,
        firstname: this.fname,
        lastname: this.lname,
        occupation: this.occupation,
        profile: this.profile,
      };
     this.activeModal.close(editUser);
    
    } else {
      //adding user
      let adUser: Users = {
        id: "",
        firstname: this.fname,
        lastname: this.lname,
        occupation: this.occupation,
        profile: this.profile,
      };
      this.activeModal.close(adUser);

    }
  }


}
