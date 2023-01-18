import { InjectionToken } from '@angular/core';

export * from './lib/services.module';
export * from './lib/api/api';
export const BASE_PATH = new InjectionToken<string>('basePath');
