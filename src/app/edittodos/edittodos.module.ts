import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdittodosComponent } from './edittodos.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [EdittodosComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class EdittodosModule { }
