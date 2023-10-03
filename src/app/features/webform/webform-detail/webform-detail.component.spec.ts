import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebformDetailComponent } from './webform-detail.component';

describe('WebformDetailComponent', () => {
  let component: WebformDetailComponent;
  let fixture: ComponentFixture<WebformDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebformDetailComponent]
    });
    fixture = TestBed.createComponent(WebformDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
