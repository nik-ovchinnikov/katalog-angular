import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/item.model';
import { Storage } from 'src/app/shared/storage.model';
import { ItemType } from 'src/app/shared/itemType.model';
import { ChangeItemInfoService } from '../changeItemInfo.service';

@Component({
  selector: 'app-show-all-items-list',
  templateUrl: './show-all-items-list.component.html',
  styleUrls: ['./show-all-items-list.component.css']
})
export class ShowAllItemsListComponent implements OnInit {
  constructor(public changeItemInfoService: ChangeItemInfoService) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.changeItemInfoService.changeButtonListener();
  }

}
