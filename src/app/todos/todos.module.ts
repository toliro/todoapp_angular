import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { FormsModule } from '@angular/forms';
import { UsersModule } from '../users/users.module';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class TodosModule { }
