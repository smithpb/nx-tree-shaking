import { Component, OnInit } from '@angular/core';
import { UsedService } from '@test-migration/services';

@Component({
  selector: 'test-migration-parent-container',
  templateUrl: './parent-container.component.html',
  styleUrls: ['./parent-container.component.scss'],
})
export class ParentContainerComponent implements OnInit {
  constructor(private usedService: UsedService) {}

  ngOnInit(): void {
    this.usedService.doAThing();
  }
}
