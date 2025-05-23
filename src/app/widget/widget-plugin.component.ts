import { Component, Input } from '@angular/core';
import { WidgetPluginConfig } from './widget-plugin.model';

@Component({
  selector: 'c8y-widget-plugin',
  template: `
    <div class="p-16">
      <h1>Widget-plugin</h1>
      <p class="text">{{ config?.text || 'No text' }}</p>
      <small>My context is: {{ config?.device?.name || 'No context' }}</small>
    </div>
  `,
  styleUrls: ['./widget-plugin.component.css']
})
export class WidgetPluginComponent {
  @Input() config: WidgetPluginConfig;
}
