import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Users } from '../../model/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-editmodal',
  templateUrl: './editmodal.component.html',
  styleUrls: ['./editmodal.component.scss']
})
export class EditmodalComponent implements OnInit {

  @Input() 
  users: Users;

  fname: string;
  lname: string;
  occupation: string;
  profile: string;

  title: string;

  constructor(private activeModal: NgbActiveModal,private userservice: UserService) { }

  ngOnInit() {
    this.title = this.users ? 'Edit User' : 'Add User';

    this.fname = this.users ? this.users.firstname : "";
    this.lname = this.users ? this.users.lastname : "";
    this.occupation = this.users ? this.users.occupation :"";
    this.profile = this.users ? this.users.profile: "";

  }

  submit() {
    if (this.users) {
      //Update Todo
      let editUser: Users = {
        id: this.users.id,
        firstname: this.fname,
        lastname: this.lname,
        occupation: this.occupation,
        profile: this.profile,
      };
      const result = this.userservice.updateUser(editUser);
      if(result){
        this.activeModal.close('updated');
      }
      else{
        this.activeModal.close('fail');
      }
    } else {
      //Create Todo
      let addUser: Users = {
        id: this.users.id,
        firstname: this.fname,
        lastname: this.lname,
        occupation: this.occupation,
        profile: this.profile,
      };
      const result = this.userservice.addUser(addUser);
      if(result){
        this.activeModal.close('added')
      }else{
        this.activeModal.close("fail");
      }
    }
  }


}
