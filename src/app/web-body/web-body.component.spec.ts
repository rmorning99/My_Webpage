import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebBodyComponent } from './web-body.component';

describe('WebBodyComponent', () => {
  let component: WebBodyComponent;
  let fixture: ComponentFixture<WebBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
