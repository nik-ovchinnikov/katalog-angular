import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/item.model';
import { Storage } from 'src/app/shared/storage.model';
import { ItemType } from 'src/app/shared/itemType.model';
import { ChangeItemInfoService } from '../changeItemInfo.service';
import { ShowAllItemsService } from '../../show-all-items/showAllItems.service';

@Component({
  selector: 'app-show-all-items-list',
  templateUrl: './show-all-items-list.component.html',
  styleUrls: ['./show-all-items-list.component.css']
})
export class ShowAllItemsListComponent implements OnInit {

  constructor(
    public changeItemInfoService: ChangeItemInfoService,
    private showAllITemsService: ShowAllItemsService,
    ) { }

  ngOnInit(): void {
    this.changeItemInfoService.changeButtonCounter = 0;
    this.showAllITemsService.getItems();
    this.showAllITemsService.listEmitter.subscribe((items) => {
      this.changeItemInfoService.items = items; 
      for(let item of items) {
        item.imageSource = item.imageURL();
      }
    });
    
  }

  ngAfterViewChecked(): void {
    this.changeItemInfoService.changeButtonListener();
  }

}
