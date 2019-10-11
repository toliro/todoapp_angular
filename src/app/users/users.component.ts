import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DelmodalComponent } from './modal/delmodal/DeleteUserModal.component';
import { Users } from './model/user';
import { UserService } from '../services/user.service';
import { ToastService } from '../services/toast.service';
import { catchError } from 'rxjs/operators';
import { Page } from '../page/page';
import { EditmodalComponent } from './modal/editmodal/EditUserModal.component';
import { Observable } from 'rxjs';

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
  pageSize: number = 4;
  userLength: number;
  users: Users[];
  


  filteredData: Users[];

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private modalService: NgbModal,
    private service: UserService,
    private toast: ToastService
    ){
    
  }
  
  ngOnInit(){
    this.activeRoute.paramMap.subscribe((params: ParamMap) => {
      const forPage = params.get("page");
      const search = params.get("search")
      console.log(search);
      this.page = params.has(forPage) ? parseInt(forPage) : 1;
      this.searchText = params.has(search) ? search : null;
      this.collectionSize = this.page * this.pageSize;
      this.onSearch();
    });
  }

  loadData(){
    this.service.getUsers(this.page, this.pageSize).pipe(catchError(err => {
      return err;
    })
    ).subscribe((reply: Page<Users>) => {
      this.users = reply.content;
      this.collectionSize = reply.totalElements? reply.totalElements: 4;
    })
  }

  loadPageUsers() {
    this.service.getUsers(this.page, this.pageSize, this.searchText).pipe(catchError((err) => {
      return err;
    })
    ).subscribe((reply: Page<Users>) => {
      this.users = reply.content;
      this.collectionSize = reply.totalElements > 0 ? reply.totalElements : 4;
      this.userLength = reply.totalElements > 0 ? this.collectionSize : 0;
    })
  }

  onSearch(){
    if (this.searchText) {
      this.router.navigate(["/users"], {queryParams: { page: this.page, search: this.searchText }});
      this.loadPageUsers();
      this.userLength = this.collectionSize;
    } else {
      this.router.navigate(["/users"], { queryParams: { page: this.page } });
      this.loadData();
    }
  }

  openModal(user: Users){
    const modalRef = this.modalService.open(EditmodalComponent);
    modalRef.componentInstance.user = user;

    modalRef.result.then(result => {
      console.log(result);
      if(user){
        this.service.updateUser(result).pipe(catchError(err => {
          return err;
        })
        ).subscribe((reply: Users) =>{
          if(reply){
            this.onSearch();
            this.toast.showSuccess("User Updated");
          }
        })
      }else{
        this.service.addUser(result).pipe(catchError(err => {
          return err;
        })
        ).subscribe((reply: Users) =>{
          if(reply){
            this.onSearch();
            this.toast.showSuccess("User Added");
          }
        })
      }
    })

    
  }

  deleteModal(user: Users){
    const modalRef = this.modalService.open(DelmodalComponent);
    modalRef.componentInstance.user= user;

    modalRef.result.then(result => {
      console.log(result);
      if(result === 'deleted'){
        this.toast.showSuccess("User Deleted")
        this.onSearch();
      }
    })

  }

}
