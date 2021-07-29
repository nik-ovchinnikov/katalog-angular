import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/shared/item.model';
import { AddItemService } from '../addItem.service';

@Component({
  selector: 'app-item-added',
  templateUrl: './item-added.component.html',
  styleUrls: ['./item-added.component.css'],
  providers: [],
})
export class ItemAddedComponent implements OnInit {

  constructor(public addItemService: AddItemService) { }

  ngOnInit(): void {
  }
  ngAfterViewChecked(): void {
  }

}
