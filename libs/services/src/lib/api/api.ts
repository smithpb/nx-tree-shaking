export * from './unused.service';
import { UnusedService } from './unused.service';
export * from './another-unused.service';
import { AnotherUnusedService } from './another-unused.service';
export * from './used.service';
import { UsedService } from './used.service';

export const APIS = [UnusedService, AnotherUnusedService, UsedService];
