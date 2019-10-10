import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './users-routing.module';
import { EditmodalComponent } from './modal/editmodal/EditUserModal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DelmodalComponent } from './modal/delmodal/DeleteUserModal.component';



@NgModule({
  declarations: [UsersComponent, EditmodalComponent, DelmodalComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    UserRoutingModule,
    NgbModule
  ],
  entryComponents: [
    EditmodalComponent,
    DelmodalComponent
  ]
})
export class UsersModule { }
