import { Component, OnInit } from '@angular/core';
import { DeleteItemService } from '../deleteItem.service';
import { ShowComponentService } from 'src/app/showComponent.service';
import { Button } from 'src/app/button.service';

@Component({
  selector: 'app-show-item-delete-list',
  templateUrl: './show-item-delete-list.component.html',
  styleUrls: ['./show-item-delete-list.component.css']
})
export class ShowItemDeleteListComponent implements OnInit {

  constructor(
    private deleteItemService: DeleteItemService,
  ) { }

  ngOnInit(): void {
  }
  ngAfterViewChecked(): void {
    this.deleteItemService.changeButtonListener();
  }

}
