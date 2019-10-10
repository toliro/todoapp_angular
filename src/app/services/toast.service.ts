import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: any[] = [];

  show(txt: string, body: any = {}) {
    this.toasts.push({ txt, ...body });
  }

  remove(toast) {
    this.toasts = this.toasts.filter(t => t != toast);
  }

  constructor() { } 

  showSuccess(txt: string) {
    this.show(txt, {
      autohide: true,
      classname: "p-0 m-0 text-center bg-success text-light",
      delay: 5000
    });
  }
}
