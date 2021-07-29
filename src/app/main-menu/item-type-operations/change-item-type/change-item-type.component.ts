import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ChangeItemComponent } from '../../item-operations/change-item/change-item.component';
import { ChangeItemInfoService } from '../../item-operations/change-item/changeItemInfo.service';
import { ChangeItemTypeService } from './changeItemType.service';

@Component({
  selector: 'app-change-item-type',
  templateUrl: './change-item-type.component.html',
  styleUrls: ['./change-item-type.component.css'],
  providers: [ChangeItemInfoService]
})
export class ChangeItemTypeComponent implements OnInit {

  constructor(
    private changeItemTypeService: ChangeItemTypeService
  ) { }

  ngOnInit(): void {
  }

}
