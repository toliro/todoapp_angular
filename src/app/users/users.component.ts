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
    this.activeRoute.queryParams.subscribe((params: ParamMap) => {
      const page = params['page'];
      const search = params['search'];
      this.page = page ? parseInt(page) : 1;
      this.searchText = search ? search : null;
      this.onSearch();
    });
  }

  loadData(){
    this.service.getUsers(this.page, this.pageSize).pipe(catchError(err => {
      return err;
    })
    ).subscribe((reply: Page<Users>) => {
      this.users = reply.content;
      this.collectionSize = reply.totalElements > 0 ? reply.totalElements: 4;
    })
  }

  loadFilteredUsers() {
    this.service.getUsers(this.page, this.pageSize).pipe(catchError(() => {
      return null;
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
      this.loadFilteredUsers();
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
      if(result === 'added'){
        this.onSearch();
        this.toast.showSuccess("Added")
      }else if(result === 'updated'){
        this.onSearch();
        this.toast.showSuccess('Updated')
      }
         
       
    })

    
  }

  deleteModal(user: Users){
    const modalRef = this.modalService.open(DelmodalComponent);
    modalRef.componentInstance.user= user;

    modalRef.result.then(result => {
      if(result === 'deleted'){
        this.toast.showSuccess("Deleted")
        this.onSearch();
      }else{
        this.onSearch();
        this.toast.showSuccess('failed to delete')
      }
    })

  }

}
