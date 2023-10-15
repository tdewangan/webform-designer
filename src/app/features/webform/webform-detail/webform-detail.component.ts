import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'zul-webform-detail',
  templateUrl: './webform-detail.component.html',
  styleUrls: ['./webform-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebformDetailComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({});
  }

  addControl(controlType: string) {}
}
