import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edittodos',
  templateUrl: './edittodos.component.html',
  styleUrls: ['./edittodos.component.scss']
})
export class EdittodosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  cancel() {
    this.router.navigate(['todos']);
  }

}
