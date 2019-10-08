import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { TodosServiceService } from './service/todos-service.service';
import { Todos } from './model/todosinterface';
import { ModalComponent } from './modal/modal.component';
import { ToastService } from '../toast.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DelmodalComponent } from './modal/delmodal/delmodal.component';

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
  pageSize: number;
  todos: Todos[];
  

  filteredData: Todos[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: TodosServiceService,
    private modalService: NgbModal,
    private toast: ToastService   ){
    this.loadData();
    // this.router = router;
  }
  ngOnInit(){
    //get the user id from url
    console.log('[TodosComponent] On Init!')

    console.log(this.activatedRoute);

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) =>{
        console.log("Params");
        const userId = paramMap.get('userId');
        console.log(userId);
       
        if (userId) {
          // Filter todos by owner (user id)
          this.filteredData = this.service.getTodos().filter((todo) => {
            return todo.owner === userId;
          });
        }
    })
  }

  loadData(){
    this.todos = this.service.getTodos();
    this.collectionSize = this.service.getLength();
  }

  onSearch(){
    console.log(this.searchText);

    const searchText = this.searchText.toLowerCase();

    if(this.searchText){
      this.filteredData = this.service.getTodos().filter((todos)=>{
        return todos.name.toLowerCase().includes(this.searchText) || 
        todos.description.toLowerCase().includes(this.searchText) ||
        todos.status.toLowerCase().includes(this.searchText) ||
        todos.owner.toLowerCase().includes(this.searchText)
      })
    }else{
      this.filteredData = this.service.getTodos();
    }
    
  }

  onUpdate(todos){
    console.log("update");
    console.log(todos);
  }

  onDelete(todos){
    console.log("delete");
    console.log(todos);
  }

  
  // openModal(){
  //   const modalRef = this.modalService.open(ModalComponent);
  //   //modalRef.componentInstance.title = "Edit Todo";

  // }

  delModal(todo: Todos){
    const modalRef = this.modalService.open(DelmodalComponent);

    modalRef.result.then(result => {
      if(result === 'deleted'){
        this.toast.showSuccess('Deleted');
      }
         
       
    })
    
  }

  addModal(todo: Todos) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.todo = todo;

    modalRef.result.then(result => {
      if(result === 'added'){
        this.toast.showSuccess("Added")
      }else if(result === 'updated'){
        this.toast.showSuccess('Updated')
      }
         
       
    })
  }

  


 
  // todosData: Todo[];
  // searchText: string;
  // collectionSize: number;
  // pageSize = 5;
  // page: number;
  // showResultText: boolean;
  // resultLength: number;


  // ngOnInit() {
  //   this.activatedRoute.queryParams.subscribe((params: Params) => {
  //     const pageQ = params["page"];
  //     const searchQ = params["search"];
  //     this.page = pageQ ? parseInt(pageQ) : 1;
  //     this.searchText = searchQ ? searchQ : null;
  //     this.onPageChange();
  //   });
  // }

  // onPageChange() {
  //   if (this.searchText) {
  //     this.router.navigate(["/todos"], {
  //       queryParams: { page: this.page, search: this.searchText }
  //     });
  //     this.loadTodosDataFiltered();
  //     this.showResultText = true;
  //     this.resultLength = this.collectionSize;
  //   } else {
  //     this.router.navigate(["/todos"], { queryParams: { page: this.page } });
  //     this.loadTodosData();
  //     this.showResultText = false;
  //   }
  // }
  // onSearch() {
  //   this.onPageChange();
  // }

  // onDelete(todo: Todo) {
  //   const modalRef = this.modalService.open(TodoDeleteComponent);
  //   modalRef.componentInstance.todo = todo;
  //   modalRef.result.then(result => {
  //     if (result) {
  //       this.onPageChange();
  //       this.toastService.showSuccess("Delete Success");
  //     } else {
  //       //FAILED
  //     }
  //   });
  // }

  // openTodoForm(todo: Todos) {
  //   const modalRef = this.modalService.open(TodoFormComponent);
  //   modalRef.componentInstance.todo = todo;
  //   modalRef.result.then(result => {
  //     if (result === "a-success") {
  //       this.onPageChange();
  //       this.service.showSuccess("Creation Success");
  //     } else if (result === "u-success") {
  //       this.onPageChange();
  //       this.service.showSuccess("Update Success");
  //     } else {
  //       //FAILED
  //     }
  //   });
  // }

  // loadTodosData() {
  //   this.todosData = this.service.getTodos(this.page, this.pageSize);
  //   this.collectionSize = this.service.getTodosLength();
  // }

  // loadTodosDataFiltered() {
  //   const searchText = this.searchText.toLowerCase();
  //   this.todosData = this.service.getTodosFiltered(
  //     this.page,
  //     this.pageSize,
  //     searchText
  //   );
  //   this.collectionSize = this.service.getTodosLengthFiltered(searchText);
  // }
}



