import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  title = 'my-app';

  searchText : string;

  todoData = [
    {
        id: "1",
        name: "Testing",
        description: "Unit Testing",
        status: "In-Progress",
        owner: "1"
    },
    {
        id: "2",
        name: "Devolepment",
        description: "Web Development",
        status: "In-Progress",
        owner: "1"
    },
    {
        id: "3",
        name: "Testing",
        description: "Production Testing",
        status: "In-Progress",
        owner: "2"
    },
    {
        id: "4",
        name: "Developement",
        description: "Web Development",
        status: "In-Progress",
        owner: "3"
    },
    
]

  filteredData: any[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
    ){
    this.filteredData = this.todoData;
    // this.router = router;
  }
  ngOnInit(){
    // this.router
    //get the user id from url
    console.log('[TodosComponent] On Init!')

    console.log(this.activatedRoute);

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) =>{
        console.log("Params");
        const userId = paramMap.get('userId');
        console.log(userId);

        //filter data by owner (user id)
        this.filteredData = this.todoData.filter((todo)=>{
          return todo.owner === userId;
        })
    })
  }

  onSearch(){
    console.log(this.searchText);

    const searchText = this.searchText.toLocaleLowerCase();

    if(this.searchText){
      this.filteredData = this.todoData.filter((todos)=>{
        return todos.name.toLowerCase().includes(this.searchText) || 
        todos.description.toLowerCase().includes(this.searchText) ||
        todos.status.toLowerCase().includes(this.searchText) ||
        todos.owner.toLowerCase().includes(this.searchText)
      })
    }else{
      this.filteredData = this.todoData;
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

}


