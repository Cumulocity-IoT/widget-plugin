import { IIdentified, IManagedObject } from '@c8y/client';

export interface WidgetPluginConfig {
  text?: string;
  device?: IIdentified & Partial<IManagedObject>;
}
