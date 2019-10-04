import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { from } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';
import { AddtodosModule } from './addtodos/addtodos.module';
import { AddusersModule } from './addusers/addusers.module';
import { EdittodosModule } from './edittodos/edittodos.module';
import { EditusersModule } from './editusers/editusers.module';
import { TodosRoutingModule } from './todos/todos-routing.module';
import { TodosServiceService } from './todos/service/todos-service.service';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { UserRoutingModule } from './users/users-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    UsersModule,
    UserRoutingModule,
    TodosModule,
    TodosRoutingModule,
    AddtodosModule,
    AddusersModule,
    EdittodosModule,
    EditusersModule,
    NgbModalModule
  ],
  providers: [TodosServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
