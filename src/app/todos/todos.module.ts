import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TodosRoutingModule } from './todos-routing.module';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [TodosComponent, ModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TodosRoutingModule
  ]
})
export class TodosModule { }
