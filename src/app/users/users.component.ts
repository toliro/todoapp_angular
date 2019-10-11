import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditmodalComponent } from './modal/editmodal/EditUserModal.component';
import { DelmodalComponent } from './modal/delmodal/DeleteUserModal.component';
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
  pageSize: number = 4;
  dataLength: number;
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
      const forPage = params.get('page');
      const search = params.get("search");
      this.page = params.has(forPage) ? parseInt(forPage) : 1;
      this.searchText = params.has(search) ? search : null;
      this.onSearch();
    });
  }

  loadData(){
    this.users = this.service.getPageUsers(this.page, this.pageSize);
    this.collectionSize = this.service.getUsers().length;
    
  }

  loadFilteredUsers() {
    const searchText = this.searchText.toLowerCase();
    this.users = this.service.getAllUsers(this.page,this.pageSize,searchText);
    this.collectionSize = this.service.getAllUsers(this.page,this.pageSize,searchText).length;
  }

  onSearch(){
    if (this.searchText) {
      this.router.navigate(["/users"], {queryParams: { page: this.page, search: this.searchText }});
      this.loadFilteredUsers();
      this.dataLength = this.collectionSize;
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
        this.toast.showSuccess("User Added Successfully")
      }else if(result === 'updated'){
        this.onSearch();
        this.toast.showSuccess('User Updated Successfully')
      }
         
       
    })

    
  }

  delModal(user: Users){
    const modalRef = this.modalService.open(DelmodalComponent);
    modalRef.componentInstance.user= user;

    modalRef.result.then(result => {
      if(result === 'deleted'){
        this.toast.showSuccess("User Deleted Successfully")
        this.onSearch();
      }
    })

  }

}
