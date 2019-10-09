import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { from } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';
import { TodosRoutingModule } from './todos/todos-routing.module';
import { TodosServiceService } from './todos/service/todos-service.service';
import { NgbModule, NgbToast, NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { UserRoutingModule } from './users/users-routing.module';
import { UserService } from './users/service/user.service';
import { ToastService } from './toast.service';

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
    NgbModule,
    NgbToastModule,
  ],
  providers: [TodosServiceService, UserService,ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
