import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { TodosServiceService } from './service/todos-service.service';
import { Todos } from './model/todosinterface';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {

  title = 'my-app';

  page = 4;

  searchText : string;

  modal: ModalComponent;

  @Input() todos: Todos

  filteredData: Todos[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: TodosServiceService
    ){
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
    this.filteredData = this.service.getTodos();
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

  addTodo() {
    this.router.navigate(['addtodos/new']);
  }
  openModal(content){
    this.modal.openModal(content);
  }


}


