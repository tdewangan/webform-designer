import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebformListComponent } from './webform-list.component';

describe('WebformListComponent', () => {
  let component: WebformListComponent;
  let fixture: ComponentFixture<WebformListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebformListComponent]
    });
    fixture = TestBed.createComponent(WebformListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
