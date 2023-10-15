import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebformControlsTrayComponent } from './webform-controls-tray.component';

describe('WebformControlsTrayComponent', () => {
  let component: WebformControlsTrayComponent;
  let fixture: ComponentFixture<WebformControlsTrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebformControlsTrayComponent]
    });
    fixture = TestBed.createComponent(WebformControlsTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
