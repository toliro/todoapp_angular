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
import { EditusersModule } from './editusers/editusers.module';
import { TodosRoutingModule } from './todos/todos-routing.module';
import { TodosServiceService } from './todos/service/todos-service.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserRoutingModule } from './users/users-routing.module';
import { ModalComponent } from './todos/modal/modal.component';
import { EditmodalComponent } from './users/modal/editmodal/editmodal.component';

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
    EditusersModule,
    NgbModule
  ],
  providers: [TodosServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
