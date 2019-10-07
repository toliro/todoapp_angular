import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { TodosComponent } from './todos/todos.component';
import { AddtodosComponent } from './addtodos/addtodos.component';
import { AddusersComponent } from './addusers/addusers.component';
import { EditusersComponent } from './editusers/editusers.component';

const routes : Routes = [
    {
        path: 'users',
        loadChildren: './users/users.module#UsersModule'
    },

    {
        path: 'todos',
        loadChildren:  './todos/todos.module#TodosModule'
    },
    
    {
        path: ' ',
        redirectTo: 'users',
        pathMatch: 'full'
    },

    {
        path: 'addtodos',
        component: AddtodosComponent
    },
    {
        path: 'addusers',
        component: AddusersComponent
    },{
        path: 'editusers',
        component: EditusersComponent
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}