import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { Todos } from './model/todos';
import { ModalComponent } from './modal/EditTodoModal.component';
import { ToastService } from '../toast.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DelmodalComponent } from './modal/delmodal/DeleteTodoModal.component';
import { TodosService } from './service/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {

  title = 'my-app';

  searchText : string;
  page: number;
  collectionSize: number;
  pageSize: number = 4;
  todoLength: number;
  todos: Todos[];
  
  filteredData: Todos[];

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private service: TodosService,
    private modalService: NgbModal,
    private toast: ToastService   ){
    this.loadData();
    // this.router = router;
  }
  ngOnInit(){
    this.activeRoute.paramMap.subscribe((params: ParamMap) => {
      const forPage = params.get("page");
      const search = params.get("search");
      this.page = params.has(forPage) ? parseInt(forPage) : 1;
      this.searchText = params.has(search) ? search : null;
      this.onSearch();
    });
  }

  loadFilteredTodos() {
    const searchText = this.searchText.toLowerCase();
    this.todos = this.service.getAllTodos(this.page,this.pageSize,searchText);
    this.collectionSize = this.service.getAllTodos(this.page,this.pageSize,searchText).length;
  }

  loadData(){
    this.todos = this.service.getPageTodos(this.page, this.pageSize);
    this.collectionSize = this.service.getTodos().length;
  }

  onSearch(){
    console.log(this.searchText);
    if (this.searchText) {
      this.router.navigate(["/todos"], {queryParams: { page: this.page, search: this.searchText }});
      this.loadFilteredTodos();
      this.todoLength = this.collectionSize;
    } else {
      this.router.navigate(["/todos"], { queryParams: { page: this.page } });
      this.loadData();
    }
    
  }


  delModal(todo: Todos){
    const modalRef = this.modalService.open(DelmodalComponent);
    modalRef.componentInstance.todo = todo;

    modalRef.result.then(result => {
      if(result === 'deleted'){
        this.onSearch();
        this.toast.showSuccess('Deleted Todo');
      } 
       
    })
    
  }

  addModal(todo: Todos) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.todo = todo;

    modalRef.result.then(result => {
      if(result === 'added'){
        this.onSearch();
        this.toast.showSuccess("Todo Added Successfully")
      }else if(result === 'updated'){
        this.onSearch();
        this.toast.showSuccess('Todo Updated Successfully')
      }
         
       
    })
  }
}