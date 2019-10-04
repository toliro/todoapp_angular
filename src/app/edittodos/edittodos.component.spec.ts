import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittodosComponent } from './edittodos.component';

describe('EdittodosComponent', () => {
  let component: EdittodosComponent;
  let fixture: ComponentFixture<EdittodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
