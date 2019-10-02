import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { from } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';
import { AddtodosModule } from './addtodos/addtodos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    UsersModule,
    TodosModule,
    AddtodosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
