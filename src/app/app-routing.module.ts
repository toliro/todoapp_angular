import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { TodosComponent } from './todos/todos.component';
import { AddtodosComponent } from './addtodos/addtodos.component';

const routes : Routes = [
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: ' ',
        redirectTo: 'users',
        pathMatch: 'full'
    },
    {
        path: 'todos',
        component: TodosComponent
    },
    {
        path: 'todos/:userId',
        component: TodosComponent
    },
    {
        path: 'addtodos/new',
        component: AddtodosComponent
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}