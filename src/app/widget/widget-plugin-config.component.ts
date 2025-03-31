import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { DynamicComponent, OnBeforeSave, AlertService } from '@c8y/ngx-components';
import { WidgetPluginConfig } from './widget-plugin.model';

@Component({
  selector: 'c8y-widget-plugin-config',
  template: `
    <div class="form-group">
      <c8y-form-group>
        <label>Text</label>
        <textarea
          style="width:100%"
          name="text"
          [(ngModel)]="config.text"
          [required]="true"
        ></textarea>
      </c8y-form-group>
    </div>
  `,
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class WidgetPluginConfigComponent implements DynamicComponent, OnBeforeSave {
  @Input() config: WidgetPluginConfig = {};

  constructor(private alert: AlertService) {}

  onBeforeSave(config: any): boolean {
    if (config.text.trim() === '') {
      this.alert.warning('Please enter a valid text.');
      return false;
    }
    return true;
  }
}
