import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Item } from 'src/app/shared/item.model';
import { ItemType } from 'src/app/shared/itemType.model';
import { Storage } from 'src/app/shared/storage.model';
import { ShowAllItemsService } from './showAllItems.service';

@Component({
  selector: 'app-show-all-items',
  templateUrl: './show-all-items.component.html',
  styleUrls: ['./show-all-items.component.css'],
  providers: [ShowAllItemsService]
})
export class ShowAllItemsComponent implements OnInit {

  private itemsList: Item[] = [];

  constructor(private showAllItemsService: ShowAllItemsService) { }

  ngOnInit(): void {
    this.showAllItemsService.getItems();
    this.showAllItemsService.listEmitter.subscribe((items) => {
      this.itemsList = items;
    });
  }

}
