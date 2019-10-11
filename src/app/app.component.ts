import { Component, NgModuleRef} from '@angular/core';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "my-app";
  // can be written as public title: string = 'my-app'

  constructor(public toastService: ToastService) {}


  
}


