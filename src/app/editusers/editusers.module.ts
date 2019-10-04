import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditusersComponent } from './editusers.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [EditusersComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class EditusersModule { }
