import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtodos',
  templateUrl: './addtodos.component.html',
  styleUrls: ['./addtodos.component.scss']
})
export class AddtodosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['todos']);
  }

}
