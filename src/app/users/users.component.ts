import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditmodalComponent } from './modal/editmodal/editmodal.component';
import { DelmodalComponent } from './modal/delmodal/delmodal.component';
import { UserService } from './service/user.service';
import { Users } from './model/user';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  title = 'my-app';

  searchText : string;
  page: number;
  collectionSize: number;
  pageSize: number;
  users: Users[];
  


  filteredData: Users[];

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private modalService: NgbModal,
    private service: UserService,
    private toast: ToastService
    ){
    this.loadData();
  }
  
  ngOnInit(){

  }

  onSearch(){
    console.log(this.searchText);

    const searchText = this.searchText.toLowerCase();

    if(this.searchText){
      this.filteredData = this.service.getUsers().filter((users)=>{
        return users.firstname.toLowerCase().includes(this.searchText) || 
        users.lastname.toLowerCase().includes(this.searchText) ||
        users.occupation.toLowerCase().includes(this.searchText)
      })
    }else{
      this.loadData();
    }
    
  }

  onUpdate(users){
    console.log("update");
    console.log(users);
  }

  onDelete(users){
    console.log("delete");
    console.log(users);
  }

  openModal(user: Users){
    const modalRef = this.modalService.open(EditmodalComponent);
    modalRef.componentInstance.users = user;

    modalRef.result.then(result => {
      if(result === 'added'){
        this.toast.showSuccess("Added")
      }else if(result === 'updated'){
        this.toast.showSuccess('Updated')
      }
         
       
    })

    
  }

  delModal(){
    const modalRef = this.modalService.open(DelmodalComponent);
    modalRef.componentInstance.name = "Modal";

  }
  
  loadData(){
    this.users = this.service.getAllUsers();
    this.collectionSize = this.service.getUsersLength();
    
  }


}
