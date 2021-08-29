import { Component, OnInit } from '@angular/core';
import { DeleteItemService } from '../deleteItem.service';

@Component({
  selector: 'app-item-deleted',
  templateUrl: './item-deleted.component.html',
  styleUrls: ['./item-deleted.component.css']
})
export class ItemDeletedComponent implements OnInit {

  constructor(public deleteItemService: DeleteItemService) { }

  ngOnInit(): void {
  }

}
