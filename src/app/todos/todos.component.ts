import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { Todos } from './model/todos';
import { ModalComponent } from './modal/AddTodoModal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DelmodalComponent } from './modal/deletetodomodal/DeleteTodoModal.component';
import { ToastService } from '../services/toast.service';
import { TodoService } from '../services/todo.service';
import { catchError } from "rxjs/operators";
import { Page } from '../page/page';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {

  title = 'my-app';

  searchText?: string;
  page: number;
  collectionSize: number;
  pageSize: number = 4;
  todoLength: number;
  todos: Todos[];


  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private service: TodoService,
    private modalService: NgbModal,
    private toast: ToastService) {
  }
  ngOnInit() {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      const forPage = params["page"];
      const search = params["search"];
      this.page = forPage ? parseInt(forPage) : 1;
      this.searchText = search ? search : null;
      this.collectionSize = this.page * this.pageSize;
      this.onSearch();
    });
  }

  loadPageTodos() {
    this.service.getTodos(this.page, this.pageSize).pipe(catchError(() => {
      return null;
    })
    ).subscribe((reply: Page<Todos>) => {
      console.log(reply);
      this.todos = reply.content;
      this.collectionSize = reply.totalElements > 0 ? reply.totalElements : 4;
      this.todoLength = reply.totalElements > 0 ? this.collectionSize : 0;
    })
  }

  loadData() {
    this.service.getTodos(this.page, this.pageSize, this.searchText).pipe(catchError(err => {
      return err;
    })
    ).subscribe((reply: Page<Todos>) => {
      this.todos = reply.content;
      this.collectionSize = reply.totalElements > 0 ? reply.totalElements : 4;

    })
  }

  onSearch() {
    if (this.searchText) {
      this.router.navigate(["/todos"], { queryParams: { page: this.page, search: this.searchText } });
      this.loadPageTodos();
      this.todoLength = this.collectionSize;
    } else {
      this.router.navigate(["/todos"], { queryParams: { page: this.page } });
      this.loadData();
    }

  }


  deleteModal(todo: Todos) {
    const modalRef = this.modalService.open(DelmodalComponent);
    modalRef.componentInstance.todo = todo;

    modalRef.result.then(result => {
      console.log(result);
      this.service.deleteTodos(result).pipe(catchError(err => {
        return err;
      })
      ).subscribe((reply: Todos) => {
        if (reply) {
          this.onSearch();
          this.toast.showSuccess('Todo Deleted Successfully');
        }
      })
    })

  }

  addModal(todo: Todos) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.todo = todo;

    modalRef.result.then(result => {
      console.log(result);
      if (todo) {
        this.service.updateTodos(result).pipe(catchError(err => {
          return err;
        })
        ).subscribe((reply: Todos) => {
          if (reply) {
            this.onSearch();
            this.toast.showSuccess('Todo Updated Successfully')
          }
        })
      } else {
        this.service.addTodos(result).pipe(catchError(err => {
          return err;
        })
        ).subscribe((reply: Todos) => {
          if (reply) {
            this.onSearch();
            this.toast.showSuccess('Todo Added Successfully')
          }
        })
      }
      if (result === 'added') {
        this.onSearch();
        this.toast.showSuccess("Added")
      }
    })
  }


}