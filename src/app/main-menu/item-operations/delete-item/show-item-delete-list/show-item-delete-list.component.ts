import { Component, OnInit } from '@angular/core';
import { DeleteItemService } from '../deleteItem.service';
import { ShowComponentService } from 'src/app/showComponent.service';
import { Button } from 'src/app/button.service';
import { ShowAllItemsService } from '../../show-all-items/showAllItems.service';

@Component({
  selector: 'app-show-item-delete-list',
  templateUrl: './show-item-delete-list.component.html',
  styleUrls: ['./show-item-delete-list.component.css']
})
export class ShowItemDeleteListComponent implements OnInit {

  constructor(
    public deleteItemService: DeleteItemService,
    public showAllItemsService: ShowAllItemsService,
  ) { }

  ngOnInit(): void { 
    this.deleteItemService.deleteButtonCounter = 0;
    this.showAllItemsService.getItems();
    this.showAllItemsService.listEmitter.subscribe((items) => {
      this.deleteItemService.items = items;
      for (let item of items) {
        item.imageSource = item.imageURL();
      }
    });
  }
  ngAfterViewChecked(): void {
    this.deleteItemService.changeButtonListener();
  }

}
