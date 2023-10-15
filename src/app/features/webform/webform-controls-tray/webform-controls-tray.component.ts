import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'zul-webform-controls-tray',
  templateUrl: './webform-controls-tray.component.html',
  styleUrls: ['./webform-controls-tray.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class WebformControlsTrayComponent {
  @Output() addControl = new EventEmitter<string>();
  add(controlType: string) {
    this.addControl.emit(controlType);
  }
}
