import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DeleteItemService } from './deleteItem.service';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css'],
  providers: [DeleteItemService]
})
export class DeleteItemComponent implements OnInit {

  constructor(private deleteItemService: DeleteItemService) { }

  ngOnInit(): void {
  }

}
