import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentContainerComponent } from './parent-container/parent-container.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ParentContainerComponent],
  exports: [ParentContainerComponent],
})
export class ParentModule {}
