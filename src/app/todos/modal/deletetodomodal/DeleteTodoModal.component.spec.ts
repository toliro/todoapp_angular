import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelmodalComponent } from './DeleteTodoModal.component';

describe('DelmodalComponent', () => {
  let component: DelmodalComponent;
  let fixture: ComponentFixture<DelmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
