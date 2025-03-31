// Assets need to be imported into the module, or they are not available
import { assetPaths } from '../../assets/assets';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetPluginComponent } from './widget-plugin.component';
import { WidgetPluginConfigComponent } from './widget-plugin-config.component';
import { FormsModule, gettext, hookWidget } from '@c8y/ngx-components';

@NgModule({
  declarations: [WidgetPluginComponent, WidgetPluginConfigComponent],
  imports: [CommonModule, FormsModule],
  providers: [
    hookWidget({
      id: 'angular.widget.plugin',
      label: gettext('Module Federation widget'),
      description: gettext('Widget added via Module Federation'),
      component: WidgetPluginComponent,
      previewImage: assetPaths.previewImage,
      configComponent: WidgetPluginConfigComponent,
      data: {
        schema: () =>
          import('c8y-schema-loader?interfaceName=WidgetPluginConfig!./widget-plugin.model')
      }
    })
  ]
})
export class WidgetPluginModule {}
