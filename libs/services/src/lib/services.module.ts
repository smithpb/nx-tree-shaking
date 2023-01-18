import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnotherUnusedService } from './api/another-unused.service';
import { UnusedService } from './api/unused.service';
import { UsedService } from './api/used.service';

@NgModule({
  imports: [CommonModule],
})
export class ServicesModule {}
