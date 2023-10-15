import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebformControlPropertiesTrayComponent } from './webform-control-properties-tray.component';

describe('WebformControlPropertiesTrayComponent', () => {
  let component: WebformControlPropertiesTrayComponent;
  let fixture: ComponentFixture<WebformControlPropertiesTrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebformControlPropertiesTrayComponent]
    });
    fixture = TestBed.createComponent(WebformControlPropertiesTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
