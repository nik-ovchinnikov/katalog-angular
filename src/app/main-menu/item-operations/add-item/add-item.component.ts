import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Item } from 'src/app/shared/item.model';
import { AddItemService } from 'src/app/main-menu/item-operations/add-item/addItem.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
  providers: [AddItemService]
})
export class AddItemComponent implements OnInit {

  constructor(private addItemService: AddItemService) { }

  ngOnInit(): void {
  }

}
