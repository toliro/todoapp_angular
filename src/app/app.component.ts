import { Component, NgModuleRef} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './todos/modal/AddTodoModal.component';
import { ToastService } from './services/toast.service';

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


