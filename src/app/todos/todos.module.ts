import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TodosRoutingModule } from './todos-routing.module';
import { ModalComponent } from './modal/AddTodoModal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DelmodalComponent } from './modal/deletetodomodal/DeleteTodoModal.component';

@NgModule({
  declarations: [TodosComponent, ModalComponent, DelmodalComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TodosRoutingModule,
    NgbModule
  ],
  entryComponents: [
    ModalComponent,
    DelmodalComponent
  ]
})
export class TodosModule { }
