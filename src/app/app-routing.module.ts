import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}